<template lang="html">
  <div>
    <div class="admin_title">
      博客管理
    </div>
    <router-view></router-view>

    <div class="footer">
      <router-link to='/'>返回首页</router-link>
    </div>
  </div>

</template>

<script>
export default {
  name: 'about',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}

</script>

<style scoped lang="css">
.admin_title {
  font-size: 2.2rem;
  border: 1px solid transparent;
  border-bottom-color: #ddd;
  margin: 30px 80px;
}

.footer {
  margin:60px auto;
  color: #ddd;
  font-size: 0.9rem;
}

a {
  text-decoration: none;
  color: #ddd;
}

a:hover {
  border-bottom: 1px solid #bbb;
  color:#bbb;
}
</style>
