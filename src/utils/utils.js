import yaml from 'js-yaml';
import { get,
  rawGet,
} from './ajax';

function parseDocHeader(doc) {
  return yaml.load(doc.split('---')[1]);
}

function getPostById(id) {
  return id;
}

function getPosts(limit, skip) {
  return new Promise((resolve, reject) => {
    let l = '';
    let s = '';
    l = (limit === undefined) ? l : `limit=${limit}`;
    s = (skip === undefined) ? s : `skip=${skip}`;

    const result = [];
    get(`/classes/Articles?${l}&&${s}&&order=-updatedAt&&`).then((posts) => {
      for (const post of posts.results) {
        const myPost = {
          id: post.objectId,
          title: post.title,
        };

        rawGet(post.content.url).then((content) => {
          const doc = parseDocHeader(content);
          myPost.date = doc.date;
          myPost.description = doc.description;
          myPost.tags = doc.tags;
          result.push(myPost);
          resolve(result);
        });
      }
    }).catch((err) => {
      console.log(err);
      reject(err);
    });
  });
}

function getArchives() {
  return null;
}

function getFileContent() {}
export {
  getPostById,
  getPosts,
  getArchives,
  getFileContent,
};
