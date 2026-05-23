import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: null,
    token: ''
  },
  getters: {
    isLogin: state => !!state.token
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
    },
    SET_USER_INFO(state, userInfo) {
      state.userInfo = userInfo
    },
    CLEAR_LOGIN(state) {
      state.token = ''
      state.userInfo = null
    }
  },
  actions: {
    login({ commit }, token) {
      commit('SET_TOKEN', token)
      localStorage.setItem('token', token)
    },
    logout({ commit }) {
      commit('CLEAR_LOGIN')
      localStorage.removeItem('token')
    }
  }
})
