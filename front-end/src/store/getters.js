export default {
    tag(state) {
        return state.tag
    },
    articles(state) {
        return state.articles
    },
    article: (state) => (_id) => state.articles_id[_id],
    loginStatus: (state) => state.loginStatus
}
