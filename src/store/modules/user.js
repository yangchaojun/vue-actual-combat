const state = {
  userName: 'yangchaojun'
}

const getters = {
  firstLetter: state => {
    return state.userName.slice(-1);
  }
}

const mutations = {

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
