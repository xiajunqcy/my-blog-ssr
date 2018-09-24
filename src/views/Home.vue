<template>
    <div class="home">
        <HomeCard v-for="(item,index) in articles"
                  :key="`articles|${index}`"
                  :item="item" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import HomeCard from '@/components/HomeCard'

export default {
    name: 'home',
    asyncData({ store }) {
        return store.dispatch('FETCH_ARTICLES')
    },
    data() {
        return {}
    },
    computed: {
        ...mapGetters(['articles'])
    },
    components: {
        HomeCard
    },
    methods: {}
}
</script>

<style lang="less" scoped>
// .home {
// }
</style>
