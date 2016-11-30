<template>
<div id="app">
  <div id="header">
    <div id="site_name">
      Coooody's Blog
    </div>
    <div id="nav_menu">
      <a href="#" class="current"><i class="fa fa-home">
        首页</i></a><a href="#"><i class="fa fa-archive">
          归档</i></a><a href="#"><i class="fa fa-user">
            关于</i></a>
    </div>
    <About />
    <Posts />
  </div>
</div>

</template>

<script>
import About from './About.vue';
import Posts from './Posts.vue';
import PostDetail from './PostDetail.vue';

export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    About,
    Posts,
    PostDetail
  }
}

</script>

<style>
html {
  font-size: 16px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#site_name {
  font-size: 2.8rem;
  padding: 2rem 0.5rem;
}

#nav_menu {
  margin: 0 90px;
  border: 1px solid transparent;
  border-bottom-color: #ddd;
}

.current {
  border: 1px solid #ddd;
  border-bottom-color: transparent;
}

a {
  display: inline-block;
  padding: 3px 30px;
  margin: 0 auto;
  line-height: 30px;
  color: #444;
  font-size: 0.8rem;
  border: 1px solid transparent;
  text-decoration: none;
}

a:hover {
  border-bottom-color: #444;
  background-color: #ddd;
}

@media (max-width: 480px) {
  .current {
    border-bottom-color: #ddd;
  }
}

</style>
