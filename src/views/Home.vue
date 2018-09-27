<template>
    <div class="home">
        <transition-group name="fade">
            <HomeCard v-for="(item,index) in articles"
                      v-if="'全部' === tag || item.tag === tag"
                      :key="`articles|${index}`"
                      :item="item" />
        </transition-group>
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
        ...mapGetters(['articles']),
        ...mapGetters(['tag'])
    },
    components: {
        HomeCard
    },
    methods: {}
}
</script>

<style lang="less" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: 'max-height' 'padding' 0.3s;
    max-height: 500px;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    max-height: 0;
    padding-top: 0;
    padding-bottom: 0;
}
</style>
