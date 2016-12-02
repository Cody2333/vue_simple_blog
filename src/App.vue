<template>
<div id="app">
  <div id="header">
    <div id="site_name">
      Coooody's Blog
    </div>
    <div id="nav_menu">
      <router-link to="/posts"><i class="fa fa-home">首页</i></router-link>
      <router-link to="/archives"><i class="fa fa-archive">归档</i></router-link>
      <router-link to="/about"><i class="fa fa-user">关于</i></router-link>
    </div>
  </div>
  <transition name="fade">
    <router-view></router-view>
  </transition>
  <MyFooter/>
</div>

</template>

<script>
import MyFooter from './components/Footer.vue';
export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    MyFooter,
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
  font-size: 3.5rem;
  padding: 2rem 0.5rem;
}

#nav_menu {
  margin: 0 90px;
  border: 1px solid transparent;
  border-bottom-color: #ddd;
}

#nav_menu .router-link-active {
  border: 1px solid #ddd;
  border-bottom-color: transparent;
}

#nav_menu a {
  display: inline-block;
  padding: 3px 30px;
  margin: 0 auto;
  line-height: 30px;
  color: #444;
  font-size: 0.8rem;
  border: 1px solid transparent;
  text-decoration: none;
}

#nav_menu a:hover {
  border-bottom-color: #444;
  background-color: #ddd;
}

.btn {
  display: block;
  padding: 10px 30px;
  margin: 0 auto;
  color: #444;
  font-size: 0.8rem;
  background-color: transparent;
  border: 1px solid #ddd;
}

.btn:hover {
  background-color: #ddd;
}

.fade-enter-active,
.fade-leave {
  transition: opacity .5s
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

@media (max-width: 480px) {
  html {
    font-size: 14px
  }
  #nav_menu a {
    display: block;
  }
  #nav_menu .router-link-active {
    border-bottom-color: #ddd;
  }
}

</style>
