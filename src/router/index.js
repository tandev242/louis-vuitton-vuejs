import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import AboutUs from '@/views/AboutUs'
import Collections from '@/views/Collections'
import Login from '@/views/Login'
import ProductDetail from '@/views/ProductDetail'
import Cart from '@/views/ShoppingCart'
import Account from '@/views/MyAccount'




Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about-us',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/collections',
      name: 'Collections',
      component: Collections
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    },
    {
      path: '/:slug',
      name: 'ProductDetail',
      component: ProductDetail
    }
  ]
})
