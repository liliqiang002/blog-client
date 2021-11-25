import { createStore } from 'vuex'
import httpRequst from '../utils/request'
export default createStore({
  state: {
    isLogin: false,
    isShowLoginForm: false,
    userInfo: null
  },
  mutations: {
    setToken (state, token) {
      localStorage.setItem('token', token)
      state.isLogin = true
      state.isShowLoginForm = false
    },
    setLoginForm (state, isShow) {
      state.isShowLoginForm = isShow
    },
    setUserInfo (state, info) {
      state.userInfo = info
      state.isLogin = true
      state.isShowLoginForm = false
    }
  },
  actions: {
    setToken ({ commit }, token) {
      commit('setToken', token)
    },
    setLoginForm ({ commit }, isShow) {
      commit('setLoginForm', isShow)
    },
    async setUserInfo ({ commit }) {
      const res = await httpRequst.get('/users/getUserInfo', {})
      console.log(res)
      commit('setUserInfo', res.data)
    },
    async checkLogin ({ dispatch, state }) {
      if (state.isLogin) {
        return true
      } else {
        await dispatch('setUserInfo')
      }
    }
  },
  modules: {
  }
})
