<template lang="html">
  <div class="footer">
    <div class="info">
      Powerd By Cody
    </div>
    <router-link to="/admin/login" class="admin">
      Login
    </router-link>
  </div>
</template>

<script>
import {
  uploadArticle
} from '../utils/tools';

export default {
  name: 'footer',
  data() {
    return {}
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
input {
  display: block;
}
</style>
