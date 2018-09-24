<template>
    <section class="HomeCard">
        <div class="HomeCard__img"></div>
        <div class="HomeCard__content">
            <h3>{{item.title}}</h3>
            <p class="HomeCard__content__desc">{{item.sec}}</p>
            <p class="HomeCard__content__tag">{{item.updateTime}} {{item.label}}
                <span class="HomeCard__content__more"
                      @click="more">余下全文>></span>
            </p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'HomeCard',
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
