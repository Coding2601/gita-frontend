import { createRouter, createWebHistory } from 'vue-router'
import ChaptersView from '../views/ChaptersView.vue'
import VersesView from '../views/VersesView.vue'
import RandomVerseView from '../views/RandomVerseView.vue'
import View from '@/views/View.vue'
import Favourite from '@/views/Favourites.vue'
import Bookmark from '@/views/Bookmarks.vue'
import Login from '@/views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: View
  },
  {
    path: '/chapters',
    name: 'chapters',
    component: ChaptersView
  },
  {
    path: '/chapter/:chapter/verse/:verse',
    name: 'verse',
    component: VersesView
  },
  {
    path: '/random-verse',
    name: 'getRandomVerse',
    component: RandomVerseView
  },
  {
    path: '/favourite',
    name: 'Favourite',
    component: Favourite
  },
  {
    path: '/bookmark',
    name: 'Bookmark',
    component: Bookmark
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/sidebar',
    name: 'Sidebar',
    component: () => import('../views/Menu.vue')
  },
  {
    path: '/krishna',
    name: 'Krishna',
    component: () => import('../components/Krishna.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// eslint-disable-next-line no-unused-vars
let previousRoute = null

router.beforeEach((to, from, next) => {
  previousRoute = from.fullPath
  next()
})

export { router, previousRoute }
export default router
