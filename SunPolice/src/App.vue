<template>
  <div id="app">
    <v-header class="header" @jump='jumptolog'/>
    <!-- <v-index class="index"/> -->
    <component :is='isshow'></component>
    <v-footer class="footer"/>
  </div>
</template>

<script>
import header from './components/header/header.vue'
import footer from './components/footer/footer.vue'
import index from './components/index/index.vue'
import log from './pages/log/log.vue'
export default {
  name: 'App',
  data () {
    return {
      isshow: index
    }
  },
  components: {
    'v-header': header,
    'v-footer': footer,
    'v-index': index,
    'v-log': log
  },
  methods: {
    jumptolog (mes) {
      if (mes === 'jumped') {
        this.isshow = log
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    width 100%
    min-height 100%
  .footer
    position relative
    width 100%
    height 150px
    margin 0px auto 0 auto
    clear both
</style>
