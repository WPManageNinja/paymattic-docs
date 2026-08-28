import DefaultTheme from 'vitepress/theme'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import type { App } from 'vue'
import ZoomableImage from './components/ZoomableImage.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    enhanceAppWithTabs(app)

    // Guarded so a second enhanceApp pass (HMR) does not warn about
    // duplicate registration.
    if (!app.component('ZoomableImage')) {
      app.component('ZoomableImage', ZoomableImage)
    }
  }
}
