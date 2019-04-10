<template>
    <div>
        <div class="tab">
            <div class="item-title">个人中心</div>
            <div class="tab-item">
                <router-link to="/personality">个人资料</router-link>
            </div>
            <div class="tab-item">
            <router-link to="/userManage">用户管理</router-link>
            </div>
            <div class="tab-item">
                <router-link to="/systemManage">系统管理</router-link>
            </div>
        </div>
        <router-view class="right-wrapper"></router-view>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="stylus" scoped rel="stylesheet/stylus">
    .tab
        float left
        width 20%
        margin-left 15%
        height 500px
        .item-title
            height 70px
            line-height 70px
            font-size 35px
            text-align center
            background rgb(33,82,126)
        .tab-item
            height 40px
            line-height 40px
            font-size 23px
            text-align center
            background rgb(242,242,242)
            &:active
                background rgb(255,255,255)
    .right-wrapper
        float left
        width 60%
        height 500px
        background rgb(82,130,170)
</style>
