<template>
    <section class="ArticleCard">
        <div class="ArticleCard__img"></div>
        <div class="ArticleCard__content">
            <h3>{{item.title}}</h3>
            <p class="ArticleCard__content__desc">{{item.content}}</p>
            <p class="ArticleCard__content__tag">{{item.updateTime}} {{item.label}}
            </p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ArticleCard',
    props: {
        item: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        more() {
            this.$router.push({
                name: 'article',
                params: { _id: this.item._id }
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.ArticleCard {
    display: flex;
    background: #eee;
    box-sizing: border-box;
    padding: 30px;
    width: 720px;
    margin: 30px auto 0;
    // &__img {
    //     width: 120px;
    //     height: 120px;
    //     background: yellow;
    //     flex-shrink: 0;
    // }
    &__content {
        color: #333;
        // padding: 0 42px;
        font-size: 14px;
        h3 {
            margin: 0;
        }
        &__desc {
            line-height: 1.5em;
            margin: 12px 0;
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
