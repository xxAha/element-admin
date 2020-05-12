import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout/Layout'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Page1 from '@/pages/Page1'
import Page2 from '@/pages/Page2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: Layout,
      children: [
        {
          path: '/home',
          name: 'Home',
          component: Home
        },
        {
          path: '/page1',
          name: 'Page1',
          component: Page1
        },
        {
          path: '/page2',
          name: 'Page2',
          component: Page2
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
