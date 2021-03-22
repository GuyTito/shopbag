import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "/node_modules/@popperjs/core/dist/umd/popper.min.js"
import "/node_modules/bootstrap/dist/js/bootstrap.min.js"
import "bootstrap/dist/css/bootstrap.min.css"
import './assets/style/main.scss'
import './registerServiceWorker'

createApp(App).use(store).use(router).mount('#app')
