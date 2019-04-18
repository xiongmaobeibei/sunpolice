<template>
  <div class="main-container">
    <div class="all-container">
      <div class="news-container">
        <div class="main-head">
          <span>>>>&nbsp;信息发布</span>
        </div>
        <div class="main-body">
          <div class="news-report">
            <div class="news-pic">
              <myswiper></myswiper>
            </div>
            <div class="news-tab">

            </div>
          </div>
        </div>
      </div>
      <div class="interact-container">
        <div class="main-head">
          <span>>>>&nbsp;警民互动</span>
        </div>
        <div class="main-body"></div>
      </div>
      <div class="feedback-container">
        <div class="main-head">
          <span>>>>&nbsp;联系反馈</span>
        </div>
        <div class="main-body"></div>
      </div>
    </div>
  </div>
</template>

<script>
import swiper from '../rotationchart/swiper'
export default {
  data () {
    return {

    }
  },
  components: {
    myswiper: swiper
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.main-container
  background-color rgb(82,130,170)
  height auto
  width 100%
  .all-container
    width 85%
    height auto
    margin 0 auto
    margin-top -20px
    .news-container
      width 100%
      height auto
      .news-report
        width 100%
        height auto
        display flex
        flex-direction row
        justify-content space-between
        flex-wrap wrap
        background-color pink
        .news-pic
          width 48%
          height 0
          background-color red
          padding-bottom 35%
        .news-tab
          width 48%
          margin-right 0
          height 0
          background-color blue
          padding-bottom 35%
    .interact-container
      width 100%
      height auto
    .feedback-container
      width 100%
      height auto
  .main-head
    height 74px
    line-height 74px
    width 100%
    margin 0 0
    background-image url(main-head.png)
    background-repeat no-repeat
    background-size 100% 100%
    span
      color #99FFFF
      font-size 30px
      font-weight 800
      padding-left 50px
  .main-body
    width 98%
    height auto
    background-color white
    padding 20px 1%
</style>
