<template>
    <div class="Article">
        <ArticleCard :item="article($route.params._id)"/>>
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
        ...mapGetters(['article'])
    }
}
</script>

<style lang="less" scoped>
</style>
