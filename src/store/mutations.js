import Vue from 'vue'

const mutations = {
  SET_APP_NAME: (state, param) => {
    state.appName = param
  },
  SET_APP_VERSION: (state, param) => {
    Vue.set(state, 'appVersion', '2.0')
  }
}

export default mutations
