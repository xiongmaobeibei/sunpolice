<template>
    <div>
        <form action="GET" class="form">
            <p v-show="showtip">{{showtip}}</p>
            您的身份：
            <input type="radio" name="radios" value="1" v-model="param">居民
            <input type="radio" name="radios" value="2" v-model="param">警察<br>
            <input type="radio" name="radios" value="3" v-model="param">片区管理员
            <input type="radio" name="radios" value="4" v-model="param">局长
            <input type="radio" name="radios" value="5" v-model="param">超级管理员<br>
            身份证号码：<input type="text" width="50px" v-model="creditid"><br>
            密码：<input type="password" width="50px" v-model="password"><br>
            <input type="button" value="登录" width="30px" @click="login">
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
      creditid: '请输入',
      password: '密码',
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
    .form
        width 400px
        height 300px
        margin 60px auto 40px auto
        background white
        border-radius 30px
        text-align center
        line-height 40px
        font-size 18px
</style>
