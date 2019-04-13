<template>
    <div class="wrapper">
        <form action="GET" class="form">
            <p v-show="showtip">{{showtip}}</p>
            您的身份：
            <input type="radio" value="1" v-model="param" size="5" class="radio">居民
            <input type="radio" value="2" v-model="param" size="5" class="radio">警察<br>
            <input type="radio" value="3" v-model="param" size="5" class="radio">片区管理员
            <input type="radio" value="4" v-model="param" size="5" class="radio">局长
            <input type="radio" value="5" v-model="param" size="5" class="radio">超级管理员<br>
            身份证号码：<input type="text" v-model="creditid" class="inputtext"/><br>
            密码：<input type="password" v-model="password" class="inputtext"/><br>
            <input type="button" value="登录" width="30px" class="button" @click="login">
        </form>
    </div>
</template>
<script>
export default {
  props: {
    user: {
      type: Object
    }
  },
  data () {
    return {
      radio: '0',
      tip: '',
      showtip: false,
      creditid: '',
      password: '',
      param: 1
    }
  },
  methods: {
    login () {
      console.log('sdfsdf')
      console.log(this.creditid + this.password)
      // let data = {'id': this.creditid, 'password': this.password}
      // this.$emit('childFn', this.tip)
      // 请求后台端口
      /*
      this.$http.post('/api/login', data).then((response) => {
        console.log(response.data)
        console.log(this.tip)
        if (response.data === 0) {
          this.tip = '该用户不存在'
          this.showtip = false
        } else if (response.data === 1) {
          this.tip = '登录成功'
          this.showtip = true
          this.$emit('childFn', this.tip)
          //   setCookie('creditid', this.creditid, 1000 * 60)
          //   setTimeout(function () {
          //     this.$router.push('/mater')
          //   }.bind(this), 1000)
        }
      }) */
    }
  }
}
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
  .wrapper
    background rgb(82,130,170)
    height 700px
    .form
      width 600px
      height 400px
      margin 150px auto 40px auto
      padding-top 50px
      background white
      border-radius 30px
      text-align center
      line-height 40px
      font-size 18px
      .radio
        height 23px
      .inputtext
        height 15px
        width 180px
      .button
        height 40px
        font-size 20px
        border 0px
</style>
