<template>
  <div class="home">
    <HomeCard v-for="(item,index) in articles"
              :key="`articles|${index}`" />
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
    mounted() {
        console.log(123)
        this.API_GET_ARTICLES()
    },
    methods: {}
}
</script>

<style lang="less" scoped>
// .home {
// }
</style>
