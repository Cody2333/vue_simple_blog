import {
  uploadText,
  post,
} from './ajax';

export function uploadArticle(file) {
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
          console.log(res2);
          window.alert('上传成功');
        });
      });
    };
    fr.readAsText(file);
  } else {
    console.log('File Reader not supported by your browser!');
  }
}
