<template>
  <div v-show="isShowPanel" class="panel">
    <div class="title">发布文章</div>
    <div class="form-item">
      <div class="label">选择分类：</div>
      <div class="form-item-content category-list">
        <div
          @click="params.category_id = item.id"
          v-for="(item, index) in categoryList" :key="index"
          :class="[item.id === params.category_id ? 'active' : '', 'category-item']">{{item.name}}</div>
      </div>
    </div>
    <div class="form-item">
      <div class="label">添加标签：</div>
      <div class="form-item-content tag-select">
        <el-select style="width: 367px; border-radius: 2px;" v-model="params.tag_id" placeholder="请选择标签">
          <el-option
            v-for="item in tagsList"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          >
          </el-option>
        </el-select>
      </div>
    </div>
    <div class="form-item">
      <div class="label">文章封面：</div>
      <div class="form-item-content">
        <el-upload
          class="avatar-uploader"
          :action="actionUrl"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="params.cover" :src="params.cover" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>
    </div>
    <div class="form-item">
      <div class="label">文章摘要：</div>
      <div class="form-item-content">
        <el-input
          style="width: 100%"
          v-model="params.summary"
          :rows="5"
          show-word-limit
          maxlength="500"
          type="textarea"
          placeholder="请输入文章摘要"
        />
      </div>
    </div>
    <div class="footer">
      <div @click="hidePanel" class="btn cancel">取消</div>
      <div @click="confirmHandle" class="btn confirm">确定并发布</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    isShowPanel: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      actionUrl: process.env.VUE_APP_BASEURL + 'common/upload',
      categoryList: [],
      tagsList: [],
      params: {
        category_id: '',
        tag_id: '',
        cover: '',
        summary: ''
      }
    }
  },
  created () {
    this.getCategory()
    this.getTags()
  },
  methods: {
    confirmHandle () {
      if (!this.params.category_id) {
        this.$message({
          type: 'warning',
          message: '请选择分类'
        })
        return false
      }
      if (!this.params.tag_id) {
        this.$message({
          type: 'warning',
          message: '请选择标签'
        })
        return false
      }
      if (!this.params.summary) {
        this.$message({
          type: 'warning',
          message: '请输入文章摘要'
        })
        return false
      }
      this.$emit('getPanelData', this.params)
    },
    hidePanel () {
      this.$emit('hidePanel')
    },
    beforeAvatarUpload (file) {
      console.log(file)
    },
    handleAvatarSuccess (response) {
      this.params.cover = process.env.VUE_APP_BASEURL + response.data.url
    },
    async getCategory () {
      const res = await this.$http.get('/category/list', {})
      console.log(res)
      this.categoryList = res.data
    },
    async getTags () {
      const res = await this.$http.get('/tags/list', {})
      console.log(res)
      this.tagsList = res.data
    }
  }
}
</script>
<style lang="scss" scoped>
.panel {
  background: #ffffff;
  border: 1px solid #e5e6eb;
  .footer {
    border-top: 1px solid #e5e6eb;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 15px 15px;
    margin-top: 15px;
    .btn {
      margin-left: 15px;
      width: 90px;
      height: 30px;
      display: flex;
      justify-content: center;
      border: 1px solid #1e80ff;
      color: #1e80ff;
      border-radius: 2px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      &.confirm {
        background: #1e80ff;
        color: #ffffff;
      }
    }
  }
  .title {
    font-size: 18px;
    font-weight: 500;
    padding: 20px 15px;
    border-bottom: 1px solid #e5e6eb;
  }
  .form-item {
    display: flex;
    padding: 0 15px;
    margin-top: 20px;
    .label {
      min-width: 80px;
      text-align: right;
      line-height: 1.8;
    }
    .form-item-content {
      margin-left: 10px;
      flex: 1;
      .avatar-uploader {
        width: 160px;
        height: 86px;
        border: 1px dotted #e5e6eb;
        border-radius: 2px;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        /deep/ .el-upload {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
      /deep/ .el-input__inner {
        border-radius: 2px;
        &:focus {
          border: 1px solid #1e80ff;
        }
      }
      /deep/ .el-textarea__inner {
        border-radius: 2px;
        &:focus {
          border: 1px solid #1e80ff;
        }
      }
      &.category-list {
        display: flex;
        flex-wrap: wrap;
        .category-item {
          width: 88px;
          height: 28px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #86909c;
          background-color: #f4f5f5;
          border-radius: 2px;
          margin-top: 10px;
          margin-right: 5px;
          cursor: pointer;
          &.active {
            background-color: #1e80ff;
            color: #ffffff;
          }
          &:nth-child(4n) {
            margin-right: 0;
          }
          &:nth-child(-n + 4) {
            margin-top: 0;
          }
        }
      }
    }
  }
}
</style>
