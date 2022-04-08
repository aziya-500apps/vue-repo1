import Vue from 'vue'
import App from './App.vue'
import axios from "Axios"



vue.use(axios)

new Vue({
  render: h => h(App),
}).$mount('#app')
