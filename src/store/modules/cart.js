// import axios from '@/apis/axiosClient'

let cartItems = window.localStorage.getItem('cartItems');
// initial state
const state = () => ({
    cartItems: cartItems ? JSON.parse(cartItems) : [], // just crucial data (id and quantity) here
    products: [], // additional products data fetched here
    isLoading: false
})

// getters
const getters = {
    cartItems: state => state.cartItems,
    numberOfItems(state) {
        let n = 0
        state.cartItems.forEach(item => {
            n = n + Number(item.quantity)
        })
        return n
    },
    isLoading(state) {
        return state.isLoading;
    }
}

// actions
const actions = {
    async addToCart({ commit }, item) {
        commit('ADD_TO_CART_SAVE', { item })
    },

}

// mutations
const mutations = {
    ADD_TO_CART_SAVE(state, { item }) {
        let found = state.cartItems.find(product => product._id == item._id);

        if (found) {
            found.quantity = Number(found.quantity) + Number(item.quantity)
        }
        else {
            state.cartItems.push(item)
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },
    UPDATE_QUANTITY_CART(state, { _id, quantity }) {
        let found = state.cartItems.find(product => product._id == _id);

        if (found && found.quantity > 0) {
            found.quantity = quantity
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        }
    },
    DELETE_CART_ITEM(state, { _id }) {
        let newCart = state.cartItems.filter(product => product._id != _id);
        state.cartItems = newCart;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}