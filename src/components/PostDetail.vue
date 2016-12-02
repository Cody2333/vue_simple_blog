<template lang="html">
  <div>
    <div class="loading" v-if="loading">
      <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
      <span class="sr-only">Loading...</span>
    </div>

    <div v-if="error" class="error">
        something is wrong
    </div>

    <div v-if="post" class="content">
      <div class="title">
        {{post.title}}
      </div>
      <div class="date"> {{post.date.toDateString()}} </div>
      <article class="markdown-body" v-html="post.parsedContent">
      </article>
    </div>
  </div>
</template>

<script>
import {
  getPostById
} from '../utils/utils';
export default {
  name: 'post_detail',
  created() {
    this.fetchData();
  },
  data() {
    return {
      loading: false,
      post: null,
      error: null
    }
  },

  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'fetchData'
  },
  methods: {
    fetchData() {
      this.error = this.post = null;
      this.loading = true;
      getPostById(this.$route.params.id).then((post) => {
        console.log("POST INFO:");
        console.log(post);
        this.loading = false;
        this.post = post;
      }).catch((err) => {
        this.error = err;
        console.log(err);
      });
    }
  }
}

</script>
<style scoped lang="css">
@import "../assets/github-markdown.css";
.markdown-body {
    box-sizing: border-box;
    text-align: left;
    min-width: 200px;
    max-width: 980px;
    margin: 0 auto;
    padding: 45px;
}
</style>
