<template>
  <div class="login-container">
    <div class="content">
      <div class="header">
        <div class="title">账密登录</div>
        <span @click="hideLoginForm" class="close icon iconfont icon-close"></span>
      </div>
      <div class="form-box">
        <div class="form-item">
          <input v-model="username" placeholder="请输入账号" type="text">
        </div>
        <div class="form-item">
          <input v-model="password" placeholder="请输入密码" type="password">
        </div>
        <button @click="loginHandle" class="login-btn">登录</button>
        <div class="tips">测试账号：<span>前端小白</span>&emsp;密码：<span>123456</span></div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapActions([
      'setToken',
      'setLoginForm'
    ]),
    // 隐藏登录弹窗
    hideLoginForm () {
      this.setLoginForm(false)
    },
    async loginHandle () {
      if (!this.username) {
        this.$message({
          type: 'warning',
          message: '请输入账号'
        })
        return false
      }
      if (!this.password) {
        this.$message({
          type: 'warning',
          message: '请输入密码'
        })
        return false
      }
      const res = await this.$http.post('/users/login', { username: this.username, password: this.password })
      console.log(res)
      this.setToken(res.token)
    }
  }
}
</script>
<style lang="scss" scoped>
.login-container {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, .6);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  .content {
    background-color: #ffffff;
    border-radius: 4px;
    width: 300px;
    padding: 25px 20px;
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      .title {
        font-size: 18px;
      }
      .close {
        font-size: 18px;
        cursor: pointer;
        color: #999;
        &:hover {
          color: #2c3e50;
        }
      }
    }
    .form-box {
      .form-item {
        margin-bottom: 10px;
        input {
          width: 100%;
          height: 39px;
          border: 1px solid #e9e9e9;
          outline: none;
          border-radius: 2px;
          padding: 10px;
          color: #2c3e50;
          &:focus {
            border: 1px solid #007fff;
          }
        }
      }
      .login-btn {
        width: 100%;
        height: 38px;
        border-radius: 2px;
        background-color: #007fff;
        color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 0 none;
        cursor: pointer;
        margin-top: 15px;
      }
      .tips {
        margin-top: 20px;
        color: #999999;
        span {
          color: #007fff;
        }
      }
    }
  }
}
</style>
