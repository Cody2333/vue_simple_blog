import {
  uploadText,
  post,
} from './ajax';
import {
  patchPost,
} from './utils';

function uploadArticle(file) {
  return new Promise((resolve, reject) => {
    if (window.FileReader) {
      const fr = new window.FileReader();
      fr.onload = () => {
        console.log(fr.result);
        uploadText(`/files/${file.name}`, fr.result).then((res) => {
          console.log(res);
          post('/classes/Articles', JSON.stringify({
            content: {
              id: res.objectId,
              __type: 'File',
            },
          })).then((res2) => {
            resolve(res2);
          }).catch((err) => {
            reject(err);
          });
        }).catch((err) => {
          reject(err);
        });
      };
      fr.readAsText(file);
    } else {
      reject('File Reader not supported by your browser!');
    }
  });
}

function patchArticle(file, id) {
  return new Promise((resolve, reject) => {
    if (window.FileReader) {
      const fr = new window.FileReader();
      fr.onload = () => {
        console.log(fr.result);
        uploadText(`/files/${file.name}`, fr.result).then((res) => {
          console.log(res);
          patchPost(id, res.objectId).then((res2) => {
            resolve(res2);
          }).catch((err) => {
            reject(err);
          });
        }).catch((err) => {
          reject(err);
        });
      };
      fr.readAsText(file);
    } else {
      reject('File Reader not supported by your browser!');
    }
  });
}
export default uploadArticle;
export {
  uploadArticle,
  patchArticle,
};
