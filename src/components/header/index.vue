<template>
  <div class="header-container">
    <div class="page-content-wrap header-content">
      <div class="logo">
        <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/7abc2b532f725d394feaf0141547ade7.svg" alt="">
      </div>
      <div class="nav-list">
        <router-link class="nav-item" to="/">首页</router-link>
        <router-link class="nav-item" to="/">沸点</router-link>
        <router-link class="nav-item" to="/">资讯</router-link>
        <router-link class="nav-item" to="/">小册</router-link>
        <router-link class="nav-item" to="/">活动</router-link>
      </div>
      <button class="add-btn">写文章</button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.header-container {
  border-bottom: 1px solid #f1f1f1;
  background-color: #ffffff;
  .header-content {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      height: 40%;
      img {
        height: 100%;
      }
    }
    .nav-list {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .nav-item {
        padding: 0 20px;
      }
    }
    .add-btn {
      width: 100px;
      height: 32px;
      border-radius: 3px;
      background-color: #1e80ff;
      color: #ffffff;
      cursor: pointer;
      border: 0 none;
      margin-left: 20px;
    }
  }
}
</style>
