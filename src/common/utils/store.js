import Vue from "vue"
import Vuex from "vuex"

export const createStore = options => {
  Vue.use(Vuex)

  return new Vuex.Store(options)
}
