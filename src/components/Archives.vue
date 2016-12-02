<template lang="html">
  <div>
    <div class="loading" v-if="loading">
      <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
      <span class="sr-only">Loading...</span>
    </div>

    <div v-if="error" class="error">
        something is wrong
    </div>

    <div v-if="posts" class="content">
      <div class="list" v-for="post in posts">
        <div class="date"> {{post.date.toDateString()}} </div>
        <router-link :to="{ name: 'detail', params: { id: post.id }}" class="title">{{post.title}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getArchives
} from '../utils/utils';

export default {
  name: 'archives',
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
      getArchives().then((posts) => {
        console.log("get archives info:");
        console.log(posts);
        this.loading = false;
        this.posts = posts;
      }).catch((err) => {
        this.error = err;
        console.log(err);
      });
    }
  }
}

</script>

<style scoped lang="css">


.list {
  padding: 10px 10px;
}
.content {
  margin-left: 80px;
  margin-top: 30px;
  text-align: left;

}
.date {
  display: inline-block;
  width: 20%;
  font-size: 1rem;
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
