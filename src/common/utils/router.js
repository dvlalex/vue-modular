import Vue from "vue"
import VueRouter from "vue-router"

export const createRouter = options => {
  Vue.use(VueRouter)

  return new VueRouter({
    ...options,
    mode: "history",
    base: process.env.BASE_URL
  })
}
