import { loadAsyncComponents } from '@akryum/vue-cli-plugin-ssr/client'

import { createApp } from './main'

createApp({
    async beforeApp({ router }) {
        await loadAsyncComponents({
            router
        })

        // if (to.meta.needLogin) {
        //     if (!store.getters.loginStatus) {
        //         alert('请先登录')
        //         next({
        //             name: 'home'
        //         })
        //     }
        // }
    },

    afterApp({ app, router, store }) {
        // afterApp({ app, store }) {
        store.replaceState(window.__INITIAL_STATE__)

        // 处理刷新后登录状态丢失的情况
        if (
            sessionStorage.getItem('loginStatus') === 'T' &&
            !store.getters.loginStatus
        ) {
            store.commit('SET_LOGIN')
        }

        router.beforeResolve((to, from, next) => {
            const matched = router.getMatchedComponents(to)
            // const prevMatched = router.getMatchedComponents(from)
            // let diffed = false

            // 我们只关心非预渲染的组件
            // 所以我们对比它们，找出两个匹配列表的差异组件
            const activated = matched
            // const activated = matched.filter((c, i) => {
            //     return diffed || (diffed = prevMatched[i] !== c)
            // })
            const asyncDataHooks = activated
                .map((c) => c.asyncData)
                .filter((_) => _)
            if (!asyncDataHooks.length) {
                return next()
            }
            // 这里如果有加载指示器(loading indicator)，就触发
            Promise.all(
                asyncDataHooks.map((hook) =>
                    hook({
                        store,
                        route: to
                    })
                )
            )
                .then(() => {
                    // 停止加载指示器(loading indicator)
                    next()
                })
                .catch(next)
        })

        app.$mount('#app')
    }
})
