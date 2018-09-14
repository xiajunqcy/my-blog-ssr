<template>
  <section class="HomeCard">
      <div class="HomeCard__img"></div>
      <div class="HomeCard__text"></div>
  </section>
</template>

<script>
export default {
    name: 'HomeCard'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.HomeCard {
    background: #ddd;
    padding: 10px;
    width: 500px;
    margin: 10px auto;
    &__img {
        width: 100px;
        height: 100px;
        background: red;
    }
}
</style>
