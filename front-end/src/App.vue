<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <!-- <no-ssr> -->
      <WebNav />
    <!-- </no-ssr> -->
    <WebHeader />
    <router-view />
  </div>
</template>
<script>
import WebHeader from '@/components/WebHeader'
import WebNav from '@/components/WebNav'
export default {
    components: {
        WebHeader,
        WebNav
    }
}
</script>

<style lang="less">
@import './common/style/normalize.css';
@import './common/style/common.less';
</style>
