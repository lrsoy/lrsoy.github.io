// import { createApp } from 'vue'
import "./styles/index.css"
import './styles/prose.css'
import './styles/markdown/markdown.css'
import 'uno.css'
import './styles/tailwindcss/index.css'

import routes from 'pages-generated'
import NProgress from 'nprogress'
import { ViteSSG } from 'vite-ssg'
import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat.js'
import App from './App.vue'

const scrollBehavior = (to: any, from: any, savedPosition: any) => {

  if (savedPosition)
    return savedPosition
  else
    return { top: 0 }
}

export const createApp = ViteSSG(
  App,
  { routes, scrollBehavior },
  ({ router, isClient }) => {
    dayjs.extend(LocalizedFormat)
    if (isClient) {
      router.beforeEach(() => { NProgress.start() })
      router.afterEach(() => { NProgress.done() })
    }
  }
)

// const app = createApp(App)
// app.mount('#app')
