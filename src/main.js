import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import About from './About.vue';
import PostDetail from './PostDetail.vue';
import Posts from './Posts.vue';
import Archives from './Archives.vue';
import {
  getPosts,
} from './utils/utils';

Vue.use(VueRouter);
getPosts();
const routes = [{
  path: '/',
  component: App,
  redirect: '/posts',
  children: [{
    path: '/posts',
    component: Posts,
  }, {
    path: '/about',
    component: About,
  }, {
    path: '/archives',
    component: Archives,
  }, {
    path: '/detail/:id',
    name: 'detail',
    component: PostDetail,
  }],
}];

const router = new VueRouter({
  routes,
});

new Vue({
  router,
}).$mount('#app');
