<template lang="html">
  <div class="posts">
    <div class="loading" v-if="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
        something is wrong
    </div>

    <div v-if="posts" class="content">
      <div class="list" v-for="post in posts">
        <a href="#" class="post"> {{ post.title }} </a>
        <div class="date"> {{post.date}} </div>
        <div class="description"> {{post.description}} </div>

      </div>
    </div>
  </div>
</template>

<script>
import {
  getPosts
} from './utils/utils';
export default {
  name: 'posts',

  created() {
    this.fetchData();
  },
  data() {
    return {
      loading: false,
      posts: null,
      error: null
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
      getPosts().then((posts) => {
        console.log("get posts info:");
        console.log(posts);
        this.loading = false;
        this.posts = posts;
      }).catch((err) => {
        this.error = err;
        console.err(err);
      });
    }
  }


}

</script>

<style scoped lang="css">
.list {
  margin:30px auto;
}
.post {
  font-size: 2.5rem;
  padding: 10px 0;
}
.date {
  font-size: 1rem;
  color: #999;
  padding: 5px 20px;
}

.description {
  font-size: 1rem;
  color: #555;
  padding: 5px 20px;
}

a:hover {
  border-bottom-color: #444;
  background-color: transparent;
}
</style>
