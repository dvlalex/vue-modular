import { createApp, createRouter, createStore } from "@/common"
import { routes } from "./router"
import dashboard from "./store"
;(() => {
  createApp({
    router: createRouter({ routes }),
    store: createStore({ modules: { dashboard } })
  })
})()
