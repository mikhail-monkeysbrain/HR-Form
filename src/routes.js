// default
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// Pages
import Home from '@/pages/Home'
import users from '@/pages/Users'
import NotFound from '@/pages/404'
import user from '@/pages/User'
import reports from '@/pages/Reports'

// Routering
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/users',
      name: 'users',
      component: users
    },
    {
      path: '/users/:id',
      name: 'product',
      component: user
    },
    {
      path: '/reports',
      name: 'reports',
      component: reports
    },
    {
      path: '*',
      name: 'notFound',
      component: NotFound
    }
  ]
})