export default {
  namespaced: true,
  state: {
    landingCounter: 0
  },

  getters: {
    COUNTER: state => state.landingCounter
  },

  mutations: {
    INCREASE: state => {
      state.landingCounter += 1
    }
  }
}
