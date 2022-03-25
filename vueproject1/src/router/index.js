import Vue from'vue'
import router from 'vue-router'
import HelloWorld from "../components/HelloWorld"

Vue.use(router)

routes = [
    {
        path:'/',
        name:"Hello World",
        component:HelloWorld
    }
]

export default new router({routes})