import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import product from './modules/product'
import cart from './modules/cart'


Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
      user,
      product,
      cart
  }
})

