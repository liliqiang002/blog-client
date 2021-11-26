<template>
  <div class="home-container">
    <Header />
    <div class="banner-section">
      <div class="page-content-wrap">
        <svg-icon icon-class="logo"></svg-icon>
      </div>
    </div>
  </div>
</template>
<script>
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
.home-container {
  .banner-section {
    background-color: #1e80ff;
    padding: 95px 0 85px 0;
    .page-content-wrap {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .svg-icon {
      width: 100%;
      height: 500px;
    }
  }
}
</style>
