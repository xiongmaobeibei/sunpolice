<template>
    <div class="wrapper">
        <form action="GET" class="form">
            <p v-show="showtip">{{showtip}}</p>
            <input type="text" v-model="creditid"  class="inputtext"/><br>
            <input type="password" v-model="password" value="请输入密码" class="inputtext"/><br>
            <input type="button" value="登录" width="30px" class="button" @click="login">
        </form>
    </div>
</template>
<script>
// const ERR_OK = 0
export default {
  props: {
    user: {
      type: Object
    }
  },
  data () {
    return {
      tip: '',
      showtip: false,
      creditid: '',
      password: '',
      param: 1,
      myuser: {}
    }
  },
  methods: {
    login () {
      this.$http.get('api/log').then(response => {
        console.log(response.body)
      })
      // console.log(this.creditid + this.password)
      // let data = {'id': this.creditid, 'password': this.password}
      // 请求后台接口
      // this.$http.get('/api/dolog').then(response => {
      //   console.log(response.data)
      //   // if (response.data === 0) {
      //   //   this.tip = '该用户不存在'
      //   //   this.showtip = false
      //   // } else if (response.data === 1) {
      //   //   this.tip = '登录成功'
      //   //   this.showtip = true
      //   //   this.$emit('childFn', this.tip)
      //   //   //   setCookie('creditid', this.creditid, 1000 * 60)
      //   //   //   setTimeout(function () {
      //   //   //     this.$router.push('/mater')
      //   //   //   }.bind(this), 1000)
      //   // }
      // })
    }
  }
}
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
  .wrapper
    background rgb(82,130,170)
    height 600px
    .form
      width 50%
      height 300px
      margin 150px auto 150px auto
      padding-top 50px
      background white
      border-radius 30px
      text-align center
      line-height 40px
      font-size 18px
      .inputtext
        height 15px
        width 180px
      .button
        height 40px
        font-size 20px
        border 0px
</style>
