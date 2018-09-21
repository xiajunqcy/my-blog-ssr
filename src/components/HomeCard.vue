<template>
    <section class="HomeCard">
        <div class="HomeCard__img"></div>
        <div class="HomeCard__content">
            <h3>Hello World! 你好世界</h3>
            <p class="HomeCard__content__desc">记得早先少年时 大家诚诚恳恳 说一句，是一句 清早上火车站 长街黑暗无行人 卖豆浆的小店冒着热气 从前的日色变得慢 车，马，邮件都慢 一生只够爱一个人 从前的锁也好看 钥匙精美有样子 你锁了，人家就懂了。 记得早先少年时 大家诚诚恳恳 说一句，是一句 清早上火车站 长街黑暗无行人 卖豆浆的小店冒着热气 从前的日色变得慢 车，马，邮件都慢 一生只够爱一个人 从前的锁也好看 钥匙精美有样子 你锁了，人家就懂了 </p>
            <p class="HomeCard__content__tag">2018/02/12 心得/代码
                <span class="HomeCard__content__more">余下全文>></span>
            </p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'HomeCard'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.HomeCard {
    display: flex;
    background: #eee;
    padding: 15px;
    width: 500px;
    margin: 10px auto;
    &__img {
        width: 120px;
        height: 120px;
        background: yellow;
        flex-shrink: 0;
    }
    &__content {
        color: #333;
        padding: 0 15px;
        font-size: 14px;
        h3 {
            margin: 0;
        }
        &__desc {
            margin: 12px 0;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
        }
        &__tag {
            color: #999;
            margin: 5px 0;
            font-size: 12px;
        }
        &__more {
            float: right;
            cursor: pointer;
        }
    }
}
</style>
