<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{$store.state.testData}}</p>
  </div>
</template>

<script>
// import { API_GET_ARTICLE } from '@/api'

export default {
    asyncData({ store, route: { name } }) {
        return store.dispatch('FETCH_TEST', { name })
        // return API_GET_ARTICLE({
        //     name: name
        // }).then((data) => {
        //     store.state.testData = data
        //     // commit('SET_TEST', data)
        // })
    },
    mounted() {
        // API_GET_ARTICLE().then((data) => {
        //     console.log('FETCH_TEST.then', data)
        //     this.$store.state.testData = data
        //     // commit('SET_TEST', data)
        // })
    }
}
</script>
