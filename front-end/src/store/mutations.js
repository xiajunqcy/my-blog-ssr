export default {
    SET_ARTICLES: (state, data) => {
        state.articles = data
        state.API_GET_ARTICLES = true
    },
    UPDATE_ARTICLES: (state) => {
        state.articles = undefined
        state.API_GET_ARTICLES = false
    },
    SET_TAG: (state, data) => {
        state.tag = data
    },
    SET_ARTICLE_ID: (state, data) => {
        state.articles_id[data._id] = data
    },
    DEL_ARTICLE_ID: (state, _id) => {
        state.articles = state.articles.filter((item) => item._id !== _id)
        state.articles_id[_id] = undefined
    },

    SET_LOGIN(state) {
        console.log('SET_LOGIN')
        state.loginStatus = true
    },
    SET_LOGOUT(state) {
        state.loginStatus = false
    }
}
