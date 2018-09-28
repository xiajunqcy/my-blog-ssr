import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export function createStore() {
    return new Vuex.Store({
        state() {
            return {
                // 登录状态
                loginStatus: false,
                tag: '全部',
                articles: [],
                API_GET_ARTICLES: false,
                articles_id: {}
            }
        },
        actions,
        mutations,
        getters
    })
}
