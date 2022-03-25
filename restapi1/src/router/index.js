import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from "../components/HelloWorld"
import search from "../components/form1"

Vue.use(Router)


const routes = [
    {
        path:'/',
        name:"Home",
        component:HelloWorld
    },
    {
        path:'/search',
        name:"Home",
        component:search
    },
    
]

let router = new Router({routes})

export default router