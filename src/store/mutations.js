export default {
    SET_ARTICLES: (state, data) => {
        state.articles = data
        state.API_GET_ARTICLES = true
    },
    SET_ARTICLES_ID: (state, data) => {
        state.articles_id[data._id] = data
    }
}
