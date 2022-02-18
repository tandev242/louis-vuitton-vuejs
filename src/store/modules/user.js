import axios from '@/apis/axiosClient'

// initial state
const state = () => ({
    token: localStorage.getItem('token') || '',
    status: '',
    user: JSON.parse(localStorage.getItem('user')) || {}
})

// getters
const getters = {
    isLoggedIn: state => !!state.token,
    user: state => state.user
}

// actions
const actions = {
    async login({commit}, user){
        commit('LOGIN_REQUEST')
        try{
            const res = await axios.post("/signin", user)
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('user', JSON.stringify(res.data.user))
            commit('LOGIN_SUCCESS', {
                token: res.data.token,
                user: res.data.user
            })
        }catch{
            commit('LOGIN_ERROR')
        }
    },
    async logout({commit}){
        commit('LOGOUT_REQUEST')
        localStorage.clear()
        commit('LOGOUT_SUCCESS')
    },
}

// mutations
const mutations = {
    LOGIN_REQUEST(state){
        state.status= 'loading'
    },
    LOGIN_ERROR(state){
        state.status = 'error'
    },
    LOGIN_SUCCESS(state, { token, user }){
        state.status = 'success'
        state.token = token
        state.user = user
    },
    LOGOUT_REQUEST(state){
        state.status= 'loading'
    },
    LOGOUT_SUCCESS(state){
        state.status = ''
        state.token = ''
        state.user = {}
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}