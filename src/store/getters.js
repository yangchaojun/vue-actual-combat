const getters = {
  lastLetterOfAppName(state) {
    return state.appName.slice(-1)
  }
}

export default getters
