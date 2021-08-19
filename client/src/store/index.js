import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'
import axios from '../apis/axios'
import swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    upcoming: [],
    animeOne: {},
    animeSearch: [],
    animeEpisodes: [],
    isLoggedIn: false,
    bookmarkOne: {},
    bookmarkAll: []
  },
  mutations: {
    LOGIN_STATUS (state, value) {
      state.isLoggedIn = value
    },
    UPCOMING_ANIME (state, payload) {
      state.upcoming = payload
    },
    SEARCH_ANIME (state, payload) {
      state.animeSearch = payload
    },
    SEARCH_ANIME_ONE (state, payload) {
      state.animeOne = payload
    },
    SEARCH_ANIME_EPISODES (state, payload) {
      state.animeEpisodes = payload
    },
    BOOKMARK_ONE (state, payload) {
      state.bookmarkOne = payload
    },
    BOOKMARK_ALL (state, payload) {
      state.bookmarkAll = payload
    },
  },
  actions: {
    // Upcoming Anime
    upcomingAnime(context, payload) {
      axios({
        url: '/anime/upcoming',
        method: 'get'
      })
      .then(({data}) => {
        let upcoming = data.anime.filter((el, i) => i <= 11)
        context.commit('UPCOMING_ANIME', upcoming)
      })
      .catch(err => {
        swal.fire("error", '', 'error')
      })
    },

    // Search Anime
    searchAnime(context, payload) {
      // payload with q parameter
      // console.log(payload);
      let {q} = payload
      axios({
        url: `/anime/search?q=${q}`,
        method: 'get',
      })
      .then(({data}) => {
        let results = data.results
        // let results = data.results.filter((el, i) => i <= 11)
        context.commit('SEARCH_ANIME', results)

        router.push('/search').catch(() => {})
      })
      .catch(err => {
        console.log(err.response);
        swal.fire("error", '', 'error')
      })
    },

    // Anime information
    infoAnime(context, payload) {
      let {mal_id} = payload
      let title = ""

      axios({
        url: `/anime/info/${mal_id}`,
        method: 'get'
      })
      .then(({data}) => {
        // console.log(data);
        title = data.title
        context.commit('SEARCH_ANIME_ONE', data)

      })
      .catch(err => {
        swal.fire("We dont have this anime right now")
      })
    },

    // Search Anime Videos
    searchAnimeVideos(context, payload) {
      let keyword = payload
      axios({
        url: `/anime/videos?keyword=${keyword}`,
        method: 'get'
      })
      .then(({data}) => {
        let vid_id = data.video.vid_id
        // console.log(vid_id, '=====')
        context.dispatch('getAnimeEpisodes', vid_id)
      })
      .catch(err => {
        swal.fire("We dont have this anime right now")
      })
    },

    // Get Episodes
    getAnimeEpisodes(context, payload) {
      // let {keyword} = payload
      axios({
        url: `/anime/detail?vid_id=${payload}`,
        method: 'get',
      })
      .then(({data}) => {
        let payload = data.episode
        context.commit('SEARCH_ANIME_EPISODES', payload)
      })
      .catch(err => {
        swal.fire("error", '', 'error')
      })
    },

    // Get Link Stream & Download
    getAnimeLink(context, payload) {
      // let {keyword} = payload
      return axios({
        url: `/anime/detail?vid_id=${payload}`,
        method: 'get'
      })
      .then(({data}) => {
        let payload = data.data
        return payload
      })
      .catch(err => {
        throw err
      })
    },

    // ------------ OAuth Google ------------

    googleLogin ({ commit, dispatch }, idToken) {
      // console.log(idToken, '<<<< id token >>>>')
      axios({
        url: '/user/login',
        data: {
          id_token: idToken
        },
        method: 'post',
      })
      .then(({ data }) => {
        localStorage.access_token = data.access_token
        localStorage.id = data.id

        swal.fire(
          'Sign In Success!',
            `Welcome ${data.email}`,
            'success'
        )
        commit('LOGIN_STATUS', true)
      })
      .catch(err => {
        console.log(err.response);
      })
    },

    logout ({ commit }, payload) {
      localStorage.clear()
      swal.fire(
        'You already signed out!'
      )
      commit('LOGIN_STATUS', false)
    },

    loginCheck ({ commit }, payload) {
      commit('LOGIN_STATUS', payload)
    },

    addBookmark(context, payload) {
      axios({
        method: "post",
        url: '/user/bookmark',
        data: payload,
        headers: {
          access_token: localStorage.access_token
        }
      })
      .then(({data}) => {
        swal.fire('success add anime to bookmark', '', 'success')
      })
      .catch(err => {
        console.log(err.response);
      })
    },

    findBookmark(context, payload) {
      let filter = payload || 'All'
      axios({
        method: "get",
        url: `/user/bookmark?status=${filter}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
      .then(({data}) => {
        context.commit('BOOKMARK_ALL', data)
      })
      .catch(err => {
        console.log(err.response);
      })
    },

    findOneBookmark(context, payload) {
      axios({
        method: "get",
        url: `/user/bookmark/${payload}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
      .then(({data}) => {
        context.commit('BOOKMARK_ONE', data)
        // console.log(data);
        
      })
      .catch(err => {
        console.log(err.response);
      })
    },

    deleteBookmark(context, payload) {
      axios({
        url: `/user/bookmark/${payload}`,
        method: "delete",
        headers: {
          access_token: localStorage.access_token
        }
      })
      .then(({data}) => {
        swal.fire('success delete anime from bookmark', '', 'success')
        context.dispatch('findBookmark')
      })
      .catch(err => {
        console.log(err.response);
      })
    },

    statusBookmark(context, payload) {
      let {mal_id, status} = payload
      axios({
        url: `/user/bookmark/${mal_id}`,
        method: "patch",
        data: {status},
        headers: {
          access_token: localStorage.access_token
        }
      })
      .then(({data}) => {
        swal.fire('success update status anime from bookmark', '', 'success')
        
      })
      .catch(err => {
        console.log(err.response);
      })
    },

  },
  modules: {
  }
})
