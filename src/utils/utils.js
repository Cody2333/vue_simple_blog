import yaml from 'js-yaml';
import { get,
  rawGet,
  rawPost,
} from './ajax';
import config from './config';

/*
github api 会把外链的图片转成github服务器上的图片链接，速度超慢
所以手动改了一下
*/
function changeImgUrl(parsedContent) {
  let result = parsedContent.replace(/img\ssrc/g, 'img useless');
  result = result.replace(/data-canonical-src/g, 'src');
  return result;
}

function parseDocHeader(doc) {
  return yaml.load(doc.split('---')[1]);
}

function parseDocContent(doc) {
  return doc.split('---')[2];
}

function getPostById(id) {
  return new Promise((resolve, reject) => {
    get(`/classes/Articles/${id}`).then((post) => {
      const myPost = {
        id: post.objectId,
        title: post.title,
      };
      rawGet(post.content.url).then((content) => {
        const doc = parseDocHeader(content);
        myPost.date = doc.date;
        myPost.description = doc.description;
        myPost.tags = doc.tags;
        myPost.content = parseDocContent(content);
        rawPost(`${config.githuApiPrefix}/markdown`, JSON.stringify({
          text: myPost.content,
          mode: 'markdown',
        })).then((res) => {
          myPost.parsedContent = changeImgUrl(res);
          resolve(myPost);
        });
      });
    }).catch((err) => {
      reject(err);
    });
  });
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
  return new Promise((resolve, reject) => {
    const result = [];
    get('/classes/Articles?order=-updatedAt&&').then((posts) => {
      for (const post of posts.results) {
        const myPost = {
          id: post.objectId,
          title: post.title,
        };

        rawGet(post.content.url).then((content) => {
          const doc = parseDocHeader(content);
          myPost.date = doc.date;
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

export {
  getPostById,
  getPosts,
  getArchives,
};
