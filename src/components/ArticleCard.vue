<template>
    <section class="ArticleCard">
        <h2>{{item.title}}</h2>
        <p class="ArticleCard__info">
            <span class="ArticleCard__info__tag">{{item.tag}}</span>
            {{item.updateTime}}
        </p>
        <p class="ArticleCard__content"
           v-if="renderFin"
           v-highlight
           v-html="this.item.content"></p>
    </section>
</template>

<script>
export default {
    name: 'ArticleCard',
    data() {
        return {
            renderFin: false
        }
    },
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
        if (marked && this.item.content) {
            this.item.content = marked(this.item.content)
            this.renderFin = true
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../common/style/common.less';

.ArticleCard {
    border-radius: 5px;
    /deep/ .hljs {
        overflow: auto;
    }
    background: #eee;
    box-sizing: border-box;
    padding: 30px;
    width: 720px;
    margin: 30px auto 0;
    font-size: 14px;
    h2 {
        margin: 0;
        font-size: 25px;
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

    &__content {
        margin-top: 40px;
    }
}
</style>
