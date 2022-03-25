// import { createApp } from 'vue'
import Vue from "vue"
import App from './App'
import router from "./router"

Vue.useAttrs(router)

let vueRouter = new Vue({
    el:"#app",
    router,
    render: h => h(App)
})

export default vueRouter
