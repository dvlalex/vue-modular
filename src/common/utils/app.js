import Vue from "vue"
import App from "@/common/layouts/App"

import Button from "@/common/components/Button"

export const createApp = options => {
  Vue.component("CButton", Button)

  return new Vue({
    ...options,
    render: h => h(App)
  }).$mount("#app")
}
