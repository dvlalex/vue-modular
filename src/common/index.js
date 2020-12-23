import Vue from "vue"
export * from "@/common/utils/app"
export * from "@/common/utils/router"
export * from "@/common/utils/store"

const isProd = process.env.NODE_ENV !== "development"
Vue.config.silent = isProd
Vue.config.productionTip = !isProd
Vue.config.performance = !isProd
Vue.config.devtools = !isProd
