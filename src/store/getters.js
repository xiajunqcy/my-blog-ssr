export default {
    articles(state) {
        return state.articles
    },
    article: (state) => (_id) => state.articles_id[_id]
}
