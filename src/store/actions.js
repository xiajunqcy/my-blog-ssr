import { API_GET_ARTICLES } from '@/api'

export default {
    FETCH_ARTICLES: ({ commit }) => {
        return API_GET_ARTICLES().then(({ data, code }) => {
            if (code === '1') {
                commit('SET_ARTICLES', data.articleList)
            }
        })
    }
}
