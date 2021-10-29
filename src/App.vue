<template>
  <router-view/>
</template>

<style lang="scss">
html {
  background-color: #f4f5f5;
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
</style>
