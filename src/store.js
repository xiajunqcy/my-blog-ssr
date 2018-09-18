import Vue from 'vue'
import Vuex from 'vuex'
import { API_GET_ARTICLES } from '@/api'

Vue.use(Vuex)

export function createStore() {
    return new Vuex.Store({
        state() {
            return {
                articles: []
            }
        },
        getters: {
            articles(state) {
                return state.articles
            }
        },
        mutations: {
            SET_ARTICLES: (state, data) => {
                console.log('set', data)
                state.articles = data
            }
        },
        actions: {
            FETCH_ARTICLES: ({ commit }) => {
                return API_GET_ARTICLES().then(({ data, code }) => {
                    console.log(data)
                    if (code === '1') {
                        commit('SET_ARTICLES', data.articleList)
                    }
                })
            }
        }
    })
}
