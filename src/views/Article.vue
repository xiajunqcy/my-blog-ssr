<template>
    <div class="Article">
        <section class="Article__edit"
                 v-if="loginStatus">
            <input @click="editArticle" class="Article-btn" type="button" value="修改">
            <input @click="delArticle" class="Article-btn" type="button" value="删除">
        </section>
            <ArticleCard :item="article($route.params._id)" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ArticleCard from '@/components/ArticleCard'

export default {
    components: {
        ArticleCard
    },
    asyncData({ store, route }) {
        return store.dispatch('FETCH_ARTICLE', { _id: route.params._id })
    },
    computed: {
        ...mapGetters(['article', 'loginStatus'])
    },
    methods: {
        editArticle() {
            this.$router.push({
                name: 'editor',
                params: { _id: this.$route.params._id }
            })
        },
        delArticle() {
            console.log('delArticle')
        }
    }
}
</script>

<style lang="less" scoped>
@import '../common/style/common.less';

.Article {
    padding-bottom: 50px;
    &__edit {
        background: #eee;
        border-radius: 5px;
        padding: 15px 0;
        width: 720px;
        margin: 30px auto;
        text-align: center;
    }

    &-btn {
        margin: 0 10px;
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
