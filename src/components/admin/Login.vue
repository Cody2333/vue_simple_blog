<template lang="html">
  <div class="content">
    <label>Login</label>
    <input type="text" v-model="username" placeHolder="用户名">
    <input type="password" v-model="password" placeHolder="密码">
    <button class="btn" @click="login">登录</button>
  </div>
</template>

<script>
import {
  login
} from '../../utils/utils';

export default {
  created() {
    this.autologin();
  },
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      login(this.username, this.password).then((res) => {
        this.$router.push('/admin/list');
      }).catch((err) => {
        console.log(err);
        alert(err.responseJSON.error);
      })
    },
    autologin() {
      login(this.username, this.password, 'autoLogin').then((res) => {
        this.$router.push('/admin/list');
      }).catch((err) => {
        console.log(err);
      })
    }
  }
}

</script>

<style scoped lang="css">
.content {
  vertical-align: middle;
  overflow: hidden;;
}
input {
  display: block;
  text-align: center;
  margin: 10px auto;
  background-color: #eee;
  padding: 0px 40px;
  font-size: 15px;
  border: 1px solid transparent;
  line-height: 30px;
}
</style>
