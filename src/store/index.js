import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
// 全局state
const state = {
  islogin: false
}

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  modules: {
  },
  strict: debug
})