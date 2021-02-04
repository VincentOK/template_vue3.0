import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'lib-flexible/flexible.js'
import 'vant/lib/index.css'
const api = require('@/setting.js')
api.mockStatus ? require('./mock') : '';

createApp(App).use(store).use(router).mount('#app')
