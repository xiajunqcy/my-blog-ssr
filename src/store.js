import Vue from 'vue'
import Vuex from 'vuex'
import { API_GET_ARTICLE } from '@/api'

Vue.use(Vuex)

export function createStore() {
    return new Vuex.Store({
        state() {
            return {
                testData: {
                    a: 1
                }
            }
        },
        mutations: {
            SET_TEST: (state, data) => {
                console.log('set', data)
                state.testData = data
            }
        },
        actions: {
            FETCH_TEST: ({ commit }, { name }) => {
                console.log('FETCH_TEST', name)
                return API_GET_ARTICLE({
                    name: name
                }).then((data) => {
                    console.log('FETCH_TEST.then', data)
                    commit('SET_TEST', data)
                })
            }
        }
    })
}
