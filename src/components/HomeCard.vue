<template>
    <section class="HomeCard">
        <div class="HomeCard__content">
            <h2 @click="more">{{item.title}}</h2>
            <p class="HomeCard__content__info">
                <span class="HomeCard__content__info__tag">{{item.tag}}</span>
                {{item.updateTime}}
            </p>
            <p class="HomeCard__content__desc">{{item.sec}}</p>
        </div>
        <div class="HomeCard__img"
             @click="more"></div>
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
@import '../common/style/common.less';

.HomeCard {
    transition: all 0.3s;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    background: #eee;
    border-radius: 5px;
    // border: 1px solid @default-color;
    box-sizing: border-box;
    padding: 30px;
    width: 720px;
    margin: 30px auto 0;
    &__img {
        width: 83px;
        height: 83px;
        margin-left: 30px;
        background: @default-color;
        flex-shrink: 0;
    }
    &__content {
        color: #333;
        font-size: 14px;
        h2 {
            display: inline-block;
            cursor: pointer;
            margin: 0;
            font-size: 25px;
            transition: all 0.3s;
        }
        h2:hover {
            opacity: 0.6;
            // background: @default-color;
        }
        &__desc {
            margin: 0;
            line-height: 1.5em;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
        }
        &__info {
            color: #999;
            margin: 10px 0;
            font-size: 14px;
            &__tag {
                background: @font-color;
                color: @default-color;
                padding: 1px 10px;
                margin-right: 10px;
                border-radius: 99px;
            }
        }
        &__more {
            float: right;
            cursor: pointer;
        }
    }
}
</style>
