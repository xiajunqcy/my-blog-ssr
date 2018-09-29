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
            },
            {
                path: '/admin',
                name: 'admin',
                component: () =>
                    import(/* webpackChunkName: "admin" */ './views/Admin.vue')
            },
            {
                path: '/editor/:_id?',
                name: 'editor',
                component: () =>
                    import(/* webpackChunkName: "editor" */ './views/Editor.vue')
            }
        ]
    })
}
