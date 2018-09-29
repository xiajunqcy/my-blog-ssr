<template>
    <section class="ArticleCard">
        <h2>{{item.title||'标题'}}</h2>
        <p class="ArticleCard__info">
            <span class="ArticleCard__info__tag">{{item.tag||'标签'}}</span>
            {{item.updateTime||'20XX-XX-XX'}}
        </p>
        <p class="ArticleCard__content"
           v-if="renderFin"
           v-highlight
           v-html="content||'内容'"></p>
    </section>
</template>

<script>
export default {
    name: 'ArticleCard',
    data() {
        return {
            renderFin: false,
            content: undefined
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
                return {
                    title: '标题',
                    tag: '标签',
                    updateTime: '20XX-XX-XX',
                    content: '内容'
                }
            }
        }
    },
    methods: {
        marked() {
            let marked = window.marked
            if (marked && this.item.content) {
                this.content = marked(this.item.content)
                this.renderFin = true
            }
        }
    },
    mounted() {
        this.marked()
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
