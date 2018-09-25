import { API_GET_ARTICLES } from '@/api'
import { API_GET_ARTICLE } from '@/api'

export default {
    FETCH_ARTICLES: ({ commit, state }) => {
        if (state.API_GET_ARTICLES) return Promise.resolve()
        return API_GET_ARTICLES().then(({ data, code }) => {
            if (code === '1') {
                commit('SET_ARTICLES', data.articleList)
            }
        })
    },
    FETCH_ARTICLE: ({ commit, state }, { _id }) => {
        console.log(state.articles_id[_id])
        if (state.articles_id[_id]) return Promise.resolve()
        return API_GET_ARTICLE({ _id: _id }).then(({ data, code }) => {
            if (code === '1') {
                commit('SET_ARTICLES_ID', data)
            }
        })
    }
}
