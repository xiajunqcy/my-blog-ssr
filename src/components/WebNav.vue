<template>
    <ul class="WebNav">
        <li v-for="(item,index) in navList"
            :class="{active:item===tag}"
            :key="`navList|${index}`"
            @click="navGo(item)">
            <span>{{item}}</span>
        </li>
    </ul>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
    name: 'WebNav',
    data() {
        return {}
    },
    computed: {
        ...mapGetters(['tag'])
    },
    props: {
        navList: {
            type: Array,
            default() {
                return ['全部', '心得', '代码']
            }
        }
    },
    methods: {
        navGo(item) {
            this.SET_TAG(item)
            this.$router.push({ name: 'home' })
        },
        ...mapMutations(['SET_TAG'])
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../common/style/common.less';

.WebNav {
    margin: 0;
    padding: 0;
    li {
        position: relative;
        display: inline-block;
        height: @nav-height;
        transition: all 0.3s;
        padding: 0 20px;
        cursor: pointer;
    }
    li.active::before {
        display: block;
        position: absolute;
        content: '';
        background: @font-color;
        height: 3px;
        width: 100%;
        top: 0;
        left: 0;
    }
    span {
        transition: color 0.3s;
        color: @font-color;
        line-height: @nav-height;
    }
    li:hover {
        background-color: @font-color;
        span {
            color: @default-color;
        }
    }
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    text-align: center;
    background-color: @default-color;
}
</style>
