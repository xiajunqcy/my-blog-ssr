<template>
  <div class="home">
    <HomeCard/>
    <HomeCard/>
    <HomeCard/>
    <HomeCard/>
  </div>
</template>

<script>
import HomeCard from '@/components/HomeCard'

export default {
    name: 'home',
    components: {
        HomeCard
    }
}
</script>

<style lang="less" scoped>
// .home {
// }
</style>
