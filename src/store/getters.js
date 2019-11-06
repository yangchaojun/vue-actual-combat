const getters = {
  lastLetterOfAppName(state) {
    return state.appName.slice(-1)
  },
  appNameWithVersion: (state) => {
    return `${state.appName}-v2.0`;
  }
}

export default getters
