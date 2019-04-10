<template>
    <div>
        姓名<p v-text="name"></p>
        邮箱<p v-text="email"></p>
        电话<p v-text="tel"></p>
        地址<p v-text="address"></p>
    </div>
</template>
<script>
export default {
  data () {
    return {
      name: '',
      email: '',
      tel: '',
      address: ''
    }
  }
}
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
</style>
