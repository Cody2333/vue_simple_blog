<template lang="html">
  <div class="posts">
    <div class="loading" v-if="loading">
      <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
      <span class="sr-only">Loading...</span>
    </div>

    <div v-if="error" class="error">
        something is wrong
    </div>

    <div v-if="posts" class="content">
      <div class="list" v-for="post in posts">
        <router-link :to="{ name: 'detail', params: { id: post.id }}" class="title">{{post.title}}</router-link>
        <div class="date"> {{post.date.toDateString()}} </div>
        <div class="description"> {{post.description}} </div>
        <router-link :to="{ name: 'detail', params: { id: post.id }}" class="readmore"><div class="more">阅读全文</div></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getPosts
} from '../utils/utils';
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
        console.log(err);
      });
    }
  }


}

</script>

<style scoped lang="css">

.list {
  margin:30px auto;
}

.description {
  font-size: 1rem;
  color: #555;
  padding: 5px 20px;
}
.more {
  margin-top: 32px;
  color: #fff;
  font-size: 0.8rem;
  padding: 3px 26px;
  background-color: #444;
  margin-bottom: 14px;

}

.list a {
  display: inline-block;
  margin: 0 auto;
  line-height: 30px;
  color: #444;
  border: 1px solid transparent;
  text-decoration: none;
}

.list .title:hover {
  border-bottom-color: #444;
  background-color: transparent;
}

.readmore:hover {
  border-bottom-color: transparent;
}

.more:hover {
  background-color: #666;
}
</style>
<style lang="css">
.title {
  font-size: 2.3rem;
  padding: 10px 0;
}
.date {
  font-size: 0.8rem;
  color: #999;
  padding: 5px 20px;
}
</style>
<style>
.loading {
  vertical-align: middle;
  margin-top: 90px;
}

</style>
