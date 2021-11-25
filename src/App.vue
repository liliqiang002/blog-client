<template>
  <router-view/>
  <Login v-if="isShowLoginForm" />
</template>
<script>
import Login from './components/login'
import { mapState } from 'vuex'
export default {
  components: {
    Login
  },
  computed: {
    ...mapState([
      'isLogin',
      'isShowLoginForm'
    ])
  },
  data () {
    return {}
  }
}
</script>
<style lang="scss">
html {
  background-color: #f4f5f5;
}
* {
  box-sizing: border-box;
}
blockquote {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0;
  margin-inline-end: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 14px;
}
.page-content-wrap {
  width: 960px;
  margin: auto;
}
a {
  color: #2c3e50;
  text-decoration: none;
}
.line-1 {
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
}
.rich-text {
  line-height: 1.8;
  text-align: justify;
  img {
    max-width: 100%;
  }
  pre {
    background: #f8f8f8;
    padding: 15px;
  }
  a {
    color: #0269c8;
  }
}
</style>
