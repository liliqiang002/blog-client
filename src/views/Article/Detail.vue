<template>
  <div class="article-detail">
    <Header />
    <div class="page-content-wrap">
      <div class="detail-wrap">
        <div class="detail-header">
          <div class="article-title">{{detail.title}}</div>
          <div class="article-info">
            <span>作者：{{detail.user && detail.user.username}}</span>
            <span>浏览：236</span>
            <span>评论：32</span>
            <span>发布于：{{timeFormat(detail.created_at)}}</span>
            <span>更新于：{{timeFormat(detail.updated_at)}}</span>
          </div>
        </div>
        <div class="detail-conten">
          <div class="rich-text" v-html="detail.content"></div>
        </div>
      </div>
    </div>
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
      id: null,
      detail: {}
    }
  },
  created () {
    this.id = this.$route.query.id
    this.getArticleDetail()
  },
  methods: {
    // 获取文章详情
    async getArticleDetail () {
      const res = await this.$http.get('/article/detail', { id: this.id })
      console.log(res)
      this.detail = res.data
    },
    // 时间格式化
    timeFormat (val) {
      return moment(val).fromNow()
    }
  }
}
</script>
<style lang="scss" scoped>
.article-detail {
  .page-content-wrap {
    margin-top: 10px;
    .detail-wrap {
      background-color: #ffffff;
      padding: 30px 25px;
      .detail-header {
        border-bottom: 1px solid #e5e6eb;
        padding-bottom: 15px;
        .article-title {
          font-size: 20px;
          margin-bottom: 15px;
          font-weight: 500;
        }
        .article-info {
          font-size: 12px;
          color: #86909c;
          span {
            display: inline-block;
            margin-right: 20px;
          }
        }
      }
    }
  }
}
</style>
