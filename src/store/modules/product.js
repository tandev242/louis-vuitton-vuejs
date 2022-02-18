import axios from '@/apis/axiosClient'

// initial state
const state = () => ({
  products: [],
  product: {},
  brands: [],
  categories: [],
  isLoading: true,
  error: null
})
// getters
const getters = {
  products(state) {
    return state.products;
  },
  product(state) {
    return state.product;
  },
  brands(state) {
    return state.brands;
  },
  categories(state) {
    return state.categories;
  },
  isLoading(state) {
    return state.isLoading;
  }
}

// actions
const actions = {
  async getProducts({ commit }) {
    commit('GET_PRODUCTS_REQUEST')
    try {
      // const prodPkg = await axios.post("/product/getProducts")
      // const catePkg = await axios.get("/category/getCategories")
      // const brandPkg = await axios.get("/brand/getBrands")
      const res = await Promise.all([axios.post("/product/getProducts"),axios.get("/category/getCategories"), axios.get("/brand/getBrands")])
      commit('GET_PRODUCTS_SUCCESS', {
        products: res[0].data.products,
        categories: res[1].data.categoryList,
        brands: res[2].data.brands
      })
    } catch (error) {
      commit('GET_PRODUCTS_ERROR', { error })
    }
  },
  async getProductsBySlug({ commit }, { type, slug }) {
    commit('GET_PRODUCTS_BY_SLUG_REQUEST')
    try {
      const res = await axios.get(`/product/${type}/${slug}`)
      commit('GET_PRODUCTS_BY_SLUG_SUCCESS', { products: res.data.products })
    } catch (error) {
      commit('GET_PRODUCTS_BY_SLUG_ERROR', { error })
    }
  },
  async getProductBySlug({ commit }, { slug }) {
    commit('GET_PRODUCT_BY_SLUG_REQUEST')
    try {
      const res = await axios.get(`/product/${slug}`)
      commit('GET_PRODUCT_BY_SLUG_SUCCESS', { product: res.data.product })
    } catch (error) {
      commit('GET_PRODUCT_BY_SLUG_ERROR', { error })
    }
  },
  async searchByProductName({ commit }, { text }) {
    commit('SEARCH_BY_PRODUCT_NAME_REQUEST')
    try {
      let res = null
      if (text) {
        res = await axios.post(`/product/searchByProductName`, { text })
      } else {
        res = await axios.post("/product/getProducts")
      }
      commit('SEARCH_BY_PRODUCT_NAME_SUCCESS', { products: res.data.products })
    } catch (error) {
      commit('SEARCH_BY_PRODUCT_NAME_ERROR', { error })
    }
  }
}


// mutations
const mutations = {
  GET_PRODUCTS_REQUEST(state) {
    state.isLoading = true
  },
  GET_PRODUCTS_SUCCESS(state, { products, categories, brands }) {
    state.products = products
    state.brands = brands
    state.categories = categories
    state.isLoading = false
  },
  GET_PRODUCTS_ERROR(state, { error }) {
    state.error = error
    state.isLoading = false
  },
  GET_PRODUCTS_BY_SLUG_REQUEST(state) {
    state.isLoading = true
  },
  GET_PRODUCTS_BY_SLUG_ERROR(state, { error }) {
    state.error = error
    state.isLoading = false
  },
  GET_PRODUCTS_BY_SLUG_SUCCESS(state, { products }) {
    state.products = products
    state.isLoading = false
  },
  GET_PRODUCT_BY_SLUG_ERROR(state, { error }) {
    state.error = error
    state.isLoading = false
  },
  GET_PRODUCT_BY_SLUG_SUCCESS(state, { product }) {
    state.product = product
    state.isLoading = false
  },
  SEARCH_BY_PRODUCT_NAME_REQUEST(state) {
    state.isLoading = true
  },
  SEARCH_BY_PRODUCT_NAME_ERROR(state, { error }) {
    state.error = error
    state.isLoading = false
  },
  SEARCH_BY_PRODUCT_NAME_SUCCESS(state, { products }) {
    state.products = products
    state.isLoading = false
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}