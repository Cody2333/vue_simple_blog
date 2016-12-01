<template lang="html">
  <div class="footer">
    <div class="info">
      Powerd By Cody
    </div>
    <a href="#" class="admin">
      Login
    </a>
  </div>
</template>

<script>
export default {
  name: 'footer',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}

</script>

<style scoped lang="css">
.footer {
  border: 1px solid transparent;
  border-top-color: #ddd;
  margin:90px;
}

a {
  color: #ddd;
  border: 1px solid transparent;
  text-decoration: none;
}
.info {
  color: #666;
  margin:20px 5px auto;
}
.admin:hover {
  color: #777;
  border-bottom-color: #444;
}
</style>
