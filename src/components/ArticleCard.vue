<template>
    <section class="ArticleCard">
        <div class="ArticleCard__img"></div>
        <div class="ArticleCard__content">
            <h2>{{item.title}}</h2>
            <p class="ArticleCard__content__desc"
               v-if="renderFin"
               v-highlight
               v-html="this.item.content"></p>
            <p class="ArticleCard__content__tag">{{item.updateTime}} {{item.label}}</p>
        </div>
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
.ArticleCard {
    border-radius: 5px;
    /deep/ .hljs {
        overflow: auto;
    }
    display: flex;
    background: #eee;
    box-sizing: border-box;
    padding: 30px;
    width: 720px;
    margin: 30px auto 0;

    &__content {
        width: 100%;
        font-size: 14px;
        h2 {
            margin: 0;
            font-size: 25px;
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
