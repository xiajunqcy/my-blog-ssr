<template>
    <nav class="WebNav">
        <span v-for="(item,index) in navList"
              :key="`navList|${index}`"
              @click="navGo(index)">{{item}}</span>
    </nav>
</template>

<script>
export default {
    name: 'WebNav',
    props: {
        navList: {
            type: Array,
            default() {
                return ['全部', '心得', '代码']
            }
        }
    },
    methods: {
        navGo(i) {
            if (i === 0) {
                this.$router.push({ name: 'home' })
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
nav {
    span {
        cursor: pointer;
        padding: 10px;
    }
    // height: 100px;
    // display: flex;
    padding: 3px 10px;
    text-align: center;
    // justify-content: space-between;
    // align-items: center;
    background: yellowgreen;
    // color: #fff;
}
</style>
