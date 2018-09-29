<template>
    <div class="Editor">
        <section class="Editor__area">
            <section>
                <span>标题：</span>
                <input placeholder="请输入标题" v-model.trim="articleInfo.title" spellcheck="false" class="Editor-input" type="text">
            </section>
                <section class="Editor-sec">
                    <span>标签：</span>
                    <select class="Editor-select"
                            v-model="articleInfo.tag">
                        <option v-for="(item,index) in tags"
                                :key="'tags|'+index"
                                :value="item"
                                v-html="item"></option>
                    </select>
                </section>
                <p>内容：</p>
                <textarea id="tt"
                          class="Editor-textarea"
                          :style="{height:`${clientHeight}px`}"
                          v-model="articleInfo.content"></textarea>
                <input @click="save" class="Editor-btn" type="button" value="保存">
            </section>
                <ArticleCard :item="articleInfo"
                             ref="ArticleCard" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ArticleCard from '@/components/ArticleCard'

export default {
    data() {
        return {
            articleInfo: {
                title: undefined,
                tag: undefined,
                content: undefined
            },
            tags: ['心得', '代码', '其他'],
            timer: undefined,
            clientHeight: 300
        }
    },
    components: {
        ArticleCard
    },
    created() {},
    mounted() {
        if (!this.loginStatus) {
            alert('请先登录！')
            document.localName.href = history.go(-1)
        }
        document.onkeydown = function() {
            if (event.keyCode == 9) {
                return false
            }
        }
        if (this.$route.params._id) {
            this.articleInfo = this.article(this.$route.params._id)
        }
    },
    methods: {
        save() {
            console.log(JSON.stringify(this.content))
        }
    },
    watch: {
        content() {
            clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                this.$refs.ArticleCard.marked()
                console.log(
                    document.querySelector('.ArticleCard__content').clientHeight
                )
                this.clientHeight = Math.max(
                    300,
                    // this.$refs.ArticleCard.$el.clientHeight
                    document.querySelector('.ArticleCard__content').clientHeight
                )
            }, 500)
        }
    },
    computed: {
        content() {
            return this.articleInfo.content
        },
        ...mapGetters(['article', 'loginStatus'])
    }
}
</script>

<style lang="less" scoped>
@import '../common/style/common.less';

.Editor {
    display: flex;

    &__area {
        transition: height 0.3s;

        box-sizing: border-box;
        background: #eee;
        border-radius: 5px;
        padding: 30px;
        width: 50%;
        // margin: 0 auto;
    }
    &-sec {
        margin: 20px 0;
    }
    &-input {
        // border: 1px solid @default-color;
        border: none;
        color: @font-color;
        width: 70%;
        // background: @default-color;
        padding: 10px;
        border-radius: 5px;
        outline: none;
    }

    &-select {
        border: none;
        color: @font-color;
        width: 20%;
        // background: @default-color;
        padding: 8px;
        border-radius: 5px;
        outline: none;
    }

    &-textarea {
        transition: height 0.3s;
        width: 100%;
        // height: 100vh;
        box-sizing: border-box;
        border: none;
        color: @font-color;
        padding: 10px;
        border-radius: 5px;
        outline: none;
        resize: none;
    }

    &-btn {
        margin-top: 15px;
        padding: 10px 50px;
        border: none;
        background: @font-color;
        color: @default-color;
        cursor: pointer;
        border-radius: 5px;
        outline: none;
        transition: opacity 0.3s;
    }
    &-btn:hover {
        opacity: 0.7;
    }
    &-btn:active {
        opacity: 0.3;
    }
}
</style>
