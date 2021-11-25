<template>
  <div class="add-container">
    <div class="header">
      <div class="left-box">
        <input v-model="title" class="title" type="text" placeholder="请输入文章标题">
      </div>
      <div class="right-box">
        <div class="add-wrap">
          <button @click="addHandle" class="add-btn">发布</button>
          <Panel @getPanelData="getPanelData" @hidePanel="hidePanel" :isShowPanel="isShowPanel" class="add-panel" />
        </div>
        <div class="avatar">
          <img src="@/assets/images/logo.png" alt="">
        </div>
      </div>
    </div>
    <div class="editor-box">
      <v-md-editor @change="inputChange" @save="saveHandle" v-model="text" height="100%"></v-md-editor>
    </div>
  </div>
</template>
<script>
import Panel from '@/components/add/panel.vue'
export default {
  components: {
    Panel
  },
  data () {
    return {
      isShowPanel: false,
      title: '',
      text: '',
      content: ''
    }
  },
  methods: {
    inputChange (text, html) {
      // console.log(text, html)
      this.content = html
    },
    // 点击 save toolbar 时触发的事件。
    saveHandle () {
      console.log(this.content)
    },
    // 隐藏panel
    hidePanel () {
      this.isShowPanel = false
    },
    // 获取panel数据，拼凑参数
    async getPanelData (data) {
      console.log(data)
      const params = JSON.parse(JSON.stringify(data))
      params.title = this.title
      params.content = this.content
      console.log({ ...params, user_id: 1 })
      const res = await this.$http.post('/article/add', { ...params, user_id: 1 })
      console.log(res)
      this.hidePanel()
      this.$router.push({ path: '/' })
    },
    // 发布
    async addHandle () {
      console.log('发布')
      if (!this.title) {
        this.$message({
          type: 'warning',
          message: '请输入标题',
          duration: 1500
        })
        return false
      }
      if (!this.content) {
        this.$message({
          type: 'warning',
          message: '请输入文章内容',
          duration: 1500
        })
        return false
      }
      this.isShowPanel = true
      // const res = await this.$http.post('/article/add', { title: this.title, content: this.content, category_id: 1, user_id: 1 })
    }
  }
}
</script>
<style lang="scss" scoped>
.add-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    background-color: #f4f5f5;
    .left-box {
      flex: 1;
      input.title {
        width: 100%;
        height: 60px;
        font-size: 22px;
        border: 0 none;
        outline: none;
        background-color: #f4f5f5;
      }
    }
    .right-box {
      display: flex;
      align-items: center;
      .add-wrap {
        position: relative;
        .add-panel {
          position: absolute;
          right: 0;
          top: 50px;
          width: 560px;
          z-index: 999;
          &::before {
            content: "";
            display: block;
            width: 12px;
            height: 12px;
            background: #ffffff;
            border: 1px solid #ddd;
            transform: rotateZ(45deg);
            position: absolute;
            top: -8px;
            right: 49px;
            border-right: 0 none;
            border-bottom: 0 none;
          }
        }
      }
      .add-btn {
        width: 80px;
        height: 32px;
        border-radius: 3px;
        background-color: #1e80ff;
        color: #ffffff;
        cursor: pointer;
        border: 0 none;
        margin-right: 20px;
      }
      .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .editor-box {
    width: 100vw;
    flex: 1;
    overflow: hidden;
  }
}
</style>
