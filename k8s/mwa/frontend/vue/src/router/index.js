import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Blog from '@/components/Blog'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/login', name: 'Login', component: Login },
    { path: '/blog', name: 'Blog', component: Blog },
    { path: '/blog/:user', name: 'UserBlog', component: Blog }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      console.log('going to return ', { selector: to.hash })
      if (document.querySelector(to.hash)) {
        console.log('got your qs: ', document.querySelector(to.hash))
      }
      return {
        selector: to.hash
      }
    }
  }
})
