<template>
    <div class="Editor">
        <textarea name="" id="" cols="100" rows="50" v-model="content"></textarea>
        <button @click="save">保存</button>
    </div>

</template>

<script>
export default {
    data() {
        return {
            content: undefined
        }
    },
    methods: {
        save() {
            console.log(JSON.stringify(this.content))
        }
    }
}
</script>
<style lang="less" scoped>
</style>
