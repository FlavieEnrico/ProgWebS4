import "normalize.css"
import {router} from "./router/index.js"

import App from './App.vue'
import { createApp } from 'vue'

const app = createApp(App)
app.use(router)
app.mount('#app')
