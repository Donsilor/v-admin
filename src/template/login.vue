<template>
  <div class="bk">
    <div class="l_box">
      <div class="title">系统管理</div>
      <h6>用户登录</h6>
      <form action="">
        <div class="user">
          <input type="text" placeholder="用户名">
          <span><img src="../assets/images/icon_14.png" alt=""></span>
        </div>
        <div class="password">
          <input type="password" placeholder="密 码">
          <span><img src="../assets/images/icon_15.png" alt=""></span>
        </div>
        <div class="clf code">
          <input type="text" placeholder="验证码">
          <a href="javascript:"><img src="../assets/images/photo_2.jpg" alt=""></a>
        </div>
        <div class="btn"><input type="submit" value="登录"></div>
      </form>
    </div>
    <router-link to="/admin/home">登录</router-link>
  </div>
</template>

<script>
  export default {
    data () {
      return {};
    }
  };
</script>

<style scoped>
  @import "../assets/css/login.css";
</style>
