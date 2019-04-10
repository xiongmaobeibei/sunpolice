<template>
    <div>
        <div class="top">
            <div class="search-wrapper">
                <div class="button"></div>
                <input class="text" type="text"/>
            </div>
            <div class="time">
                <span>2019年3月26日</span>
            </div>
            <div class="button-group">
                <input type="button" value="登录"/>
                <input type="button" value="注册"/>
            </div>
        </div>
        <div class="bottom">
            <div class="title">
                <div class="left-content">
                    <div class="title-icon"></div>
                    <div class="title-text">阳光警务</div>
                </div>
                <div class="right-content">
                    阳光精神：海纳百川 追求卓越 开明睿智 大气谦和
                </div>
            </div>
            <div class="image-wrapper"></div>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/mixin";
    .top
        margin 0
        padding 0
        width 100%
        height 40px
        background-color rgb(0,94,154)
        line-height 40px
        .search-wrapper
            width 20%
            margin-left 10px
            float left
            display inline-block
            .button
                width 23px
                height 22px
                bg-image('u162')
                float left
                margin 9px 5px 9px 5px
            .text
                width 70%
                height 20px
                border 0px
                border-radius 5px
                float left
                margin-bottom 5px
                margin 9px 3px 10px 3px
        .time
            display inline-block
            width 120px
            position absolute
            right 168px
            color white
        .button-group
            display inline-block
            width 100px
            right 10px
            position absolute
    .bottom
        background-color rgb(14,30,45)
        width 100%
        height 350px
        .title
            color:#99FFFF
            text-align:center
            height 100px
            line-height 100px
            .left-content
                width 50%
                position absolute
                margin-top 5px
                .title-icon
                    width 60px
                    height 60px
                    background-size 60px 60px
                    background-repeat no-repeat
                    bg-image('u10')
                    display inline-block
                .title-text
                    font-family '宋体'
                    font-weight bold
                    font-size 35px
                    padding -bottom 20px
                    display inline-block
                    margin-left 10px
                    letter-spacing 6px
            .right-content
                width 50%
                font-family '楷体'
                font-size 20px
                margin-top 10px
                text-align center
                display inline-block
        .image-wrapper
            height 300px
            bg-image('u2')
            background-size 100%
            background-repeat no-repeat
</style>
