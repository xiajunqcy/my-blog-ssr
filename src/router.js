import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter() {
    return new Router({
        mode: 'history',
        base: process.env.BASE_URL,
        routes: [
            {
                path: '/',
                name: 'home',
                component: () =>
                    import(/* webpackChunkName: "home" */ './views/Home.vue')
            },
            {
                path: '/home',
                redirect: '/'
            },
            {
                path: '/article/:_id',
                name: 'article',
                component: () =>
                    import(/* webpackChunkName: "article" */ './views/Article.vue')
            }
        ]
    })
}
