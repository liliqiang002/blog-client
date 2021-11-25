<template>
  <div class="disscuss-container">
    <Header />
    <div class="page-content-wrap">
      <div class="home-main">
        <div class="list-header">
          <div class="list-nav">
            <div class="list-nav-item active">热门</div>
            <div class="list-nav-item">最新</div>
            <div class="list-nav-item">热榜</div>
          </div>
        </div>
        <div class="list-wrap">
          <div class="list">
            <div @click="jumpDetail(item)" v-for="item in list" :key="item.id" class="list-item">
              <div class="title">{{item.title}}</div>
              <div class="meta-container">
                <div class="user-info">
                  <div class="user-name">{{item.user.username}}</div>
                </div>
                <div class="dividing"></div>
                <div class="da">{{timeFormat(item.created_at)}}</div>
                <div class="dividing"></div>
                <div class="tag-list">{{item.category.name}} - {{item.tag.name}}</div>
              </div>
              <div class="desc line-1">{{item.summary}}</div>
              <div class="actions-list">
                <div class="actions-item">
                  <span class="icon iconfont icon-zhiboguankanshu"></span>
                  <span>3.6w</span>
                </div>
                <div @click.stop="likeHandle(item)" class="actions-item">
                  <span class="icon iconfont icon-dianzan"></span>
                  <span>151</span>
                </div>
                <div class="actions-item">
                  <span class="icon iconfont icon-31pinglun"></span>
                  <span>35</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/header'
import moment from 'moment'
import 'moment/locale/zh-cn'
export default {
  components: {
    Header
  },
  data () {
    return {
      params: {
        page: 1,
        per_page: 20
      },
      list: []
    }
  },
  created () {
    this.getList()
  },
  methods: {
    // 点赞与取消点赞
    async likeHandle (item) {
      console.log(item)
      const res = await this.$http.post('/article/like', { id: item.id })
      console.log(res)
    },
    // 跳转详情页
    jumpDetail (item) {
      this.$router.push({ path: '/article/detail', query: { id: item.id } })
    },
    // 时间格式化
    timeFormat (val) {
      return moment(val).fromNow()
    },
    // 获取文章列表
    async getList () {
      const res = await this.$http.get('/article/list', this.params)
      console.log(res)
      this.list = res.data
    }
  }
}
</script>
<style lang="scss" scoped>
.page-content-wrap {
  margin-top: 10px;
  .home-main {
    .list-header {
      background-color: #ffffff;
      border-bottom: 1px solid rgba(151, 151, 151, 0.1);
      .list-nav {
        display: flex;
        align-items: center;
        height: 45px;
        .list-nav-item {
          padding: 0 20px;
          border-right: 1px solid rgba(151, 151, 151, 0.2);
          cursor: pointer;
          &.active {
            color: #007fff;
          }
        }
      }
    }
    .list-wrap {
      .list {
        background-color: #ffffff;
        padding: 0 20px 40px;
        .list-item {
          border-bottom: 1px solid #e5e6eb;
          cursor: pointer;
          padding: 15px 0;
          .title {
            font-size: 16px;
            font-weight: bold;
          }
          .meta-container {
            display: flex;
            align-items: center;
            color: #86909c;
            font-size: 13px;
            margin-top: 10px;
            .dividing {
              width: 1px;
              height: 14px;
              background-color: #e5e6eb;
              margin: 0 10px;
            }
          }
          .desc {
            font-size: 13px;
            margin-top: 15px;
            word-break: break-all;
            color: #86909c;
          }
          .actions-list {
            display: flex;
            align-items: center;
            margin-top: 10px;
            .actions-item {
              display: flex;
              align-items: center;
              margin-right: 20px;
              color: #86909c;
              font-size: 13px;
              .iconfont {
                margin-right: 4px;
                &.icon-zhiboguankanshu {
                  font-size: 17px;
                }
                &.icon-dianzan {
                  transform: translateY(-1px);
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
