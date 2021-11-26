<template>
  <div class="header-container">
    <div class="page-content-wrap header-content">
      <div class="logo">
        <router-link to="/">
          <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/7abc2b532f725d394feaf0141547ade7.svg" alt="">
        </router-link>
      </div>
      <div class="nav-list">
        <router-link class="nav-item" to="/">首页</router-link>
        <router-link class="nav-item" to="/disscuss/index">社区</router-link>
        <router-link class="nav-item" to="/study/index">学习</router-link>
        <router-link class="nav-item" to="/resources/index">资源</router-link>
        <router-link class="nav-item" to="/trends/index">动态</router-link>
        <router-link class="nav-item" to="/daily/index">日志</router-link>
      </div>
      <button @click="toAdd" class="add-btn">写文章</button>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapState([
      'isLogin'
    ])
  },
  methods: {
    ...mapActions([
      'setLoginForm',
      'checkLogin'
    ]),
    async toAdd () {
      await this.checkLogin()
      if (this.isLogin) {
        this.$router.push({ path: '/Article/Add' })
      } else {
        this.setLoginForm(true)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.header-container {
  border-bottom: 1px solid #f1f1f1;
  background-color: #ffffff;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
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
        &:hover {
          color: #1e80ff;
        }
        &.router-link-active {
          color: #1e80ff;
        }
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
      line-height: 32px;
    }
  }
}
</style>
