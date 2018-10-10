<template>
    <div class="Admin">
        <div>
            <div class="Admin__login"
                 v-if="!loginStatus">
                <section class="Admin-mid">
                    <span>账号：</span>
                    <input v-model.trim="adminInfo.account" spellcheck="false" class="Admin-input" type="text">
            </section>
                    <section class="Admin-mid">
                        <span>密码：</span>
                        <input v-model.trim="adminInfo.password" class="Admin-input" type="password">
            </section>
                        <section class="Admin-mid">
                            <input @click="login" class="Admin-btn" type="button" value="登录">
            </section>
            </div>
            <div v-else
                 class="Admin__logout">
                <section class="Admin-mid">
                    <input @click="logout" class="Admin-btn" type="button" value="登出">
            </section>
            </div>
        </div>

    </div>

</template>

<script>
import { API_POST_LOGIN, API_POST_LOGOUT } from '@/api'
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            content: undefined,
            adminInfo: {
                account: undefined,
                password: undefined
            }
        }
    },
    methods: {
        verify() {
            if (!this.adminInfo.account) {
                alert('请输入账号！')
                return false
            } else if (!this.adminInfo.password) {
                alert('请输入密码！')
                return false
            }
            return true
        },
        login() {
            if (!this.verify()) return
            API_POST_LOGIN(this.adminInfo)
                .then(({ code, msg }) => {
                    if (code === '1') {
                        console.log(code)
                        alert('登录成功！')
                        sessionStorage.setItem('loginStatus', 'T')
                        this.$store.commit('SET_LOGIN')
                        this.$router.push({ name: 'home' })
                    } else {
                        alert(msg)
                    }
                })
                .catch()
        },
        logout() {
            API_POST_LOGOUT()
                .then(({ code, msg }) => {
                    if (code === '1') {
                        alert('登出成功！')
                        sessionStorage.setItem('loginStatus', 'F')
                        this.$store.commit('SET_LOGOUT')
                    } else {
                        alert(msg)
                    }
                })
                .catch()
        }
    },
    computed: {
        ...mapGetters(['loginStatus'])
    }
}
</script>
<style lang="less" scoped>
@import '../common/style/common.less';
.Admin {
    background: #eee;
    border-radius: 5px;
    padding: 15px 0;
    width: 720px;
    margin: 0 auto;
    &-mid {
        text-align: center;
        margin: 15px 0;
    }
    &-input {
        // border: 1px solid @default-color;
        border: none;
        color: @font-color;
        // background: @default-color;
        padding: 10px;
        border-radius: 5px;
        outline: none;
    }
    &-btn {
        margin-top: 15px;
        padding: 10px 50px;
        border: none;
        background: @font-color;
        color: @default-color;
        cursor: pointer;
        border-radius: 5px;
        outline: none;
        transition: opacity 0.3s;
    }
    &-btn:hover {
        opacity: 0.7;
    }
    &-btn:active {
        opacity: 0.3;
    }
    margin-top: 30px;
}
</style>
