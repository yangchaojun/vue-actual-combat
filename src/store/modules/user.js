const state = {
  userName: 'yangchaojun'
}

const getters = {
  firstLetter: state => {
    return state.userName.substr(0,1);
  }
}

const mutations = {
  SET_USER_NAME: (state, param) => {
    state.userName = param
  }
}

const actions = {

}

export default {
  // namespaced: true,
  getters,
  state,
  mutations,
  actions
}
