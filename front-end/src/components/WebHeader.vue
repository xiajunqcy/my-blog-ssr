<template>
  <header class="WebHeader">
      <!-- <h1>QCY STUDIO</h1> -->
  </header>
</template>

<script>
export default {
    name: 'WebHeader'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../common/style/common.less';

header {
    font-family: 'Questrial', sans-serif;
    margin-top: @nav-height;
    font-size: 18px;
    height: 100px;
    padding-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    // border-radius: 0 0 10px 10px;
    background: @default-color url(../assets/qcy_logo.png) no-repeat center;
    background-size: 210px;
}
</style>
