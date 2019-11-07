import { getAppName } from '@/api/app'

const actions = {
  // getAppName: ({commit}) => {
  //   getAppName().then(res => {
  //     const {code , info: {appName}} = res
  //     commit('SET_APP_NAME', appName)
  //     console.log(res);
  //   }).catch(err => {
  //     console.log(err);
  //   })
  // }

  async getAppName ({ commit }) {
    try {
      const {code, info: {appName}} = await getAppName()
      commit('SET_APP_NAME', appName)
    } catch (err) {
      console.log(err);
    }
  }
}

export default actions
