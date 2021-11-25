<template>
  <div class="resources-container">
    <Header />
    <div class="page-content-wrap">
      资源
    </div>
  </div>
</template>
<script>
import Header from '@/components/header'
import axios from 'axios'
export default {
  components: {
    Header
  },
  data () {
    return {}
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      axios.get('https://restapi.amap.com/v3/config/district?keywords=%E4%B8%AD%E5%9B%BD&subdistrict=3&key=0732c7a0221d139e640d01a692afd3f0')
        .then(data => {
          console.log(data)
        })
    }
  }
}
</script>
