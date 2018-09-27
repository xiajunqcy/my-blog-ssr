<template>
  <header class="WebHeader">
      <h1>QCY STUDIO</h1>
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
    margin-top: @nav-height;
    height: 100px;
    padding-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: @default-color;
    // border-radius: 0 0 10px 10px;
}
</style>
