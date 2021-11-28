<template>
  <div class="daily-container">
    <Header />
    <div class="page-content-wrap">
      <div class="head-container">
        <div @click="showDrawer" class="add-btn"><i class="el-icon-plus"></i>新纪录</div>
        <div class="search-box">
          <input v-model="keywords" type="text">
          <div @click="handleSearch" class="search-btn">搜索</div>
        </div>
      </div>
      <div class="list-container">
        <el-timeline>
          <el-timeline-item v-for="(item, index) in listData" :key="index" :timestamp="timeFormat(item.created_at)" placement="top">
            <el-card shadow="hover">
              <h4>{{item.title}}</h4>
              <div>
                <pre>
                  {{item.content}}
                </pre>
              </div>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>
    <el-drawer
      v-model="drawer"
      title="新增记录"
      direction="rtl"
      size="600px"
      :before-close="beforeDrawerClose"
    >
      <el-form ref="form" :rules="rules" :model="form" label-width="50px">
        <el-form-item label="标题" prop="title">
          <el-input v-model="form.title" placeholder="请输入标题"></el-input>
        </el-form-item>
        <el-form-item label="类型" prop="type">
          <el-select v-model="form.type" placeholder="选择类型">
            <el-option label="类型1" value="1"></el-option>
            <el-option label="类型2" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="内容" prop="content">
          <el-input :autosize="{ minRows: 5, maxRows: 15 }" v-model="form.content" placeholder="请输入内容" type="textarea"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="handleSave" type="primary">保存</el-button>
          <el-button @click="beforeDrawerClose">取消</el-button>
        </el-form-item>
      </el-form>
    </el-drawer>
  </div>
</template>
<script>
import Header from '@/components/header'
import moment from 'moment'
import 'moment/locale/zh-cn'
export default {
  components: {
    Header
  },
  data () {
    return {
      drawer: false,
      form: {
        title: '',
        type: '',
        content: ''
      },
      rules: {
        title: [
          { required: true, message: '标题不能为空', trigger: 'change' }
        ],
        type: [
          { required: true, message: '请选择类型', trigger: 'change' }
        ],
        content: [
          { required: true, message: '内容不能为空', trigger: 'change' }
        ]
      },
      page: 1,
      per_page: 10,
      listData: []
    }
  },
  created () {
    this.getList()
  },
  methods: {
    handleSearch () {
      this.page = 1
      this.getList()
    },
    async getList () {
      const res = await this.$http.get('/daily/list', { page: this.page, per_page: this.per_page, keywords: this.keywords })
      console.log(res)
      this.listData = res.data
    },
    // 时间格式化
    timeFormat (val) {
      return moment(val).format('YYYY-MM-DD h:mm:ss')
    },
    showDrawer () {
      this.drawer = true
    },
    drawerClose () {
      console.log(2)
    },
    beforeDrawerClose () {
      this.$confirm('放弃当前添加？', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(() => {
        this.$refs.form.resetFields()
        const _this = this
        setTimeout(() => {
          _this.drawer = false
        }, 300)
      }).catch((err) => {
        console.log(err)
      })
      // this.drawer = false
    },
    handleSave () {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          const res = await this.$http.post('/daily/add', { ...this.form })
          console.log(res)
          this.page = 1
          this.getList()
          this.$refs.form.resetFields()
          this.drawer = false
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.head-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 20px 40px;
  margin-top: 10px;
  .add-btn {
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid salmon;
    color: salmon;
    height: 32px;
    margin-right: 20px;
    cursor: pointer;
    .el-icon-plus {
      margin-right: 3px;
    }
  }
  .search-box {
    display: flex;
    align-content: center;
    height: 32px;
    input {
      height: 100%;
      border: 1px solid #e5e5e5;
      width: 300px;
      border-radius: 0;
      outline: none;
      padding:0 10px;
      &:focus {
        border-color: #1e80ff;
      }
    }
    .search-btn {
      width: 80px;
      height: 100%;
      background-color: #1e80ff;
      color: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }
}
.daily-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  .page-content-wrap {
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
}
.list-container {
  background-color: #ffffff;
  padding-right: 40px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 3px;
  flex: 1;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  pre {
    white-space: pre-wrap;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.5;
    color: #666;
    word-wrap: break-word;
    white-space: pre-line;
    word-break: break-all;
  }
}
</style>
