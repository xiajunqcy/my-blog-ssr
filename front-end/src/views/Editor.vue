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
                <textarea spellcheck="false"
                          class="Editor-textarea"
                          :style="{height:`${clientHeight}px`}"
                          v-model="articleInfo.content"></textarea>
                <input @click="saveArticle" class="Editor-btn" type="button" value="保存">
            </section>
                <ArticleCard :item="articleInfo"
                             ref="ArticleCard" />
    </div>
</template>

<script>
import { API_PUT_ARTICLE, API_POST_ARTICLE } from '@/api'
import { mapGetters } from 'vuex'
import ArticleCard from '@/components/ArticleCard'

export default {
    asyncData({ store, route }) {
        if (route.params._id) {
            return store.dispatch('FETCH_ARTICLE', { _id: route.params._id })
        } else {
            return Promise.resolve()
        }
    },
    data() {
        return {
            articleInfo: {
                title: undefined,
                tag: undefined,
                content: undefined,
                sec: undefined
            },
            tags: ['迷思', '技艺'],
            timer: undefined,
            clientHeight: 300,
            statusClient: false
        }
    },
    components: {
        ArticleCard
    },
    created() {},
    mounted() {
        this.statusClient = true
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
            this.articleInfo = { ...this.article(this.$route.params._id) }
        }
    },
    methods: {
        checkInfo() {
            if (!this.articleInfo.title) {
                alert('请输入标题！')
                return false
            }
            if (!this.articleInfo.tag) {
                alert('请选择标签！')
                return false
            }
            if (!this.articleInfo.content) {
                alert('内容不能为空！')
                return false
            }
            return true
        },
        saveArticle() {
            if (!this.checkInfo()) return
            // this.articleInfo.content = JSON.stringify(this.articleInfo.content)
            this.articleInfo.sec = this.articleSec()
            if (this.$route.params._id) {
                this.API_PUT_ARTICLE()
            } else {
                this.API_POST_ARTICLE()
            }
        },
        articleSec() {
            let content = document.querySelector('.ArticleCard__content')
            content = content.innerText.replace(new RegExp(/\n/g), ' ')
            return content.slice(0, 300)
        },
        // 修改文章
        API_PUT_ARTICLE() {
            API_PUT_ARTICLE(this.articleInfo)
                .then(({ data, code, msg }) => {
                    if (code === '1') {
                        alert('修改成功！')
                        this.$store.commit('SET_ARTICLE_ID', this.articleInfo)
                        this.$store.commit('UPDATE_ARTICLES')
                        this.$router.push({
                            name: 'article',
                            params: { _id: data._id }
                        })
                    } else {
                        alert(msg)
                    }
                })
                .catch()
        },

        // 创建文章
        API_POST_ARTICLE() {
            API_POST_ARTICLE(this.articleInfo)
                .then(({ data, code, msg }) => {
                    if (code === '1') {
                        alert('创建成功！')
                        this.$store.commit('SET_ARTICLE_ID', this.articleInfo)
                        this.$store.commit('UPDATE_ARTICLES')
                        this.$router.push({
                            name: 'article',
                            params: { _id: data._id }
                        })
                    } else {
                        alert(msg)
                    }
                })
                .catch()
        }
    },
    watch: {
        content() {
            if (!this.statusClient) return
            clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                this.$refs.ArticleCard.marked()
                this.clientHeight = Math.max(
                    300,
                    document.querySelector('.ArticleCard__content')
                        ? document.querySelector('.ArticleCard__content')
                              .clientHeight
                        : 300
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
    .ArticleCard {
        margin-top: 0;
        border-left: 1px solid #fff;
    }
    &__area {
        flex-shrink: 0;
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
