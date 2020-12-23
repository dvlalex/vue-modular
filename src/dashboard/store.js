export default {
  namespaced: true,
  state: {
    dashboardCounter: 0
  },

  getters: {
    COUNTER: state => state.dashboardCounter
  },

  mutations: {
    INCREASE: state => {
      state.dashboardCounter += 1
    }
  }
}
