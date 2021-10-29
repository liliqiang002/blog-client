<template>
  <div class="home">
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
            <div v-for="item in 5" :key="item" class="list-item">
              <div class="title">首届稀土开发者大会全日程公布，27-28日直播两天精彩不停！</div>
              <div class="meta-container">
                <div class="user-info">
                  <div class="user-name">掘金小册</div>
                </div>
                <div class="dividing"></div>
                <div class="da">7天前</div>
                <div class="dividing"></div>
                <div class="tag-list">前端·JavaScript</div>
              </div>
              <div class="desc line-1">如果要设置物体拖拽，那么必须使用三个事件，并且这三个事件的使用顺序不能颠倒。 onmousedown：鼠标按下事件 onmousemove：鼠标移动事件 onmouseup：鼠标抬起事件</div>
              <div class="actions-list">
                <div class="actions-item">
                  <span class="icon iconfont icon-zhiboguankanshu"></span>
                  <span>3.6w</span>
                </div>
                <div class="actions-item">
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
export default {
  components: {
    Header
  },
  data () {
    return {}
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
        padding: 0 20px;
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
