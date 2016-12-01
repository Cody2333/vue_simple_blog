<template lang="html">
  <div>
    <div class="loading" v-if="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
        something is wrong
    </div>

    <div v-if="posts" class="content">
      <div class="create">
        <div>上传新文章</div>
        <input type ="file" name="file" @change="onFileChange"/>
        <button type="button" name="button" class="btn" @click="uploadFile">上传</button>
      </div>
      <div class="list" v-for="(post,index) in posts">
        <div class="date"> {{post.date.toDateString()}} </div>
        <router-link :to="{ name: 'detail', params: { id: post.id }}" class="title">{{post.title}}</router-link>
        <button class="btn" @click="del(post,index)">删除</button>
        <button class="btn" @click="edit(post)">上传</button>
        <input type ="file" class="input" name="file" @change="onFileChange"/>

      </div>
    </div>
  </div>
</template>

<script>
import {
  getArchives,
  deletePost,
} from '../../utils/utils';

import {
  uploadArticle,
  patchArticle
} from '../../utils/tools';

export default {
  created() {
    this.fetchData();
  },
  data() {
    return {
      loading: false,
      posts: null,
      error: null,
      file: null,
    }
  },

  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'fetchData'
  },
  methods: {
    fetchData() {
      this.error = this.posts = null;
      this.loading = true;
      getArchives().then((posts) => {
        console.log("get archives info:");
        console.log(posts);
        this.loading = false;
        this.posts = posts;
      }).catch((err) => {
        this.error = err;
        console.log(err);
      });
    },
    uploadFile() {
      uploadArticle(this.file).then((res) => {
        console.log(res);
        alert("上传成功");
        this.fetchData();
      })
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      this.file = files[0];
      if (!files.length) return;
      console.log(files[0]);
    },
    del(post, index) {
      deletePost(post.id).then((res) => {
        alert("删除成功");
        this.posts.splice(index, 1);
      }).catch((err) => {
        alert("删除出错");
      });
    },
    edit(post) {
      console.log(post);

      patchArticle(this.file, post.id).then((res) => {
        alert("修改成功");
        this.fetchData();
      }).catch((err) => {
        console.log(err);
        alert("修改出错");
      });

    }
  }
}

</script>

<style scoped lang="css">

.btn {
  float:right;
}

.input {
  float:right;
  vertical-align: middle;
  margin-top: 10px;
  padding: auto 0;
}


.list,
.create {
  padding: 10px 10px;
  border: 1px solid transparent;
  border-bottom-color: #ddd;
}

.create {
  padding: 30px 10px;
}
.content {
  margin-left: 80px;
  text-align: left;

}
.date {
  display: inline-block;
}

.title {
  display: inline-block;
  text-decoration: none;
  font-size: 1.4rem;
  color: #444;
  border: 1px solid transparent;
  padding: 2px 0px;
}

a:hover {
  border-bottom-color: #444;
}
</style>
