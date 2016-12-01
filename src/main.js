import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import About from './components/About.vue';
import PostDetail from './components/PostDetail.vue';
import Posts from './components/Posts.vue';
import Archives from './components/Archives.vue';
import Admin from './Admin.vue';
import Login from './components/admin/Login.vue';
import List from './components/admin/List.vue';

Vue.use(VueRouter);
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
}, {
  path: '/admin',
  component: Admin,
  children: [{
    path: '/admin/login',
    component: Login,
  }, {
    path: '/admin/list',
    component: List,
  }],
}];

const router = new VueRouter({
  routes,
});

new Vue({
  router,
}).$mount('#app');
