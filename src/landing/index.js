import { createApp, createRouter, createStore } from "@/common"
import { routes } from "./router"
import landing from "./store"
;(() => {
  createApp({
    router: createRouter({ routes }),
    store: createStore({ modules: { landing } })
  })
})()
