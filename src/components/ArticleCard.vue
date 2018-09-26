<template>
    <section class="ArticleCard">
        <div class="ArticleCard__img"></div>
        <div class="ArticleCard__content">
            <h3>{{item.title}}</h3>
            <p class="ArticleCard__content__desc" v-highlight v-html="this.item.content"></p>
            <p class="ArticleCard__content__tag">{{item.updateTime}} {{item.label}}</p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ArticleCard',
    directives: {
        highlight(el) {
            let blocks = el.querySelectorAll('pre code')
            if (!window || !window.hljs) return
            let hljs = window.hljs
            blocks.forEach((block) => {
                hljs.highlightBlock(block)
            })
        }
    },

    props: {
        item: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {},
    mounted() {
        let marked = window.marked
        if (marked) {
            this.item.content = marked(this.item.content)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.ArticleCard {
    /deep/ .hljs {
        overflow: auto;
    }
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
        width: 660px;
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
