import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import Detail from '../views/Detail.vue'
import Bookmark from '../views/Bookmark.vue'
import EpisodeAnime from '../components/EpisodeAnime.vue'

import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    component: Search

  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail,
    children: [
      {
        path: 'videos',
        name: 'Videos',
        component: EpisodeAnime
      }
    ]

  },
  {
    path: '/bookmark',
    name: 'Bookmark',
    component: Bookmark

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if ((to.name == 'Bookmark' || from.name == 'Bookmark') && !localStorage.access_token) {
    next('/')
  }
  next()
})

export default router
