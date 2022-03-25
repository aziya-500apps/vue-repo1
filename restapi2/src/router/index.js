import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'

import calls from '../components/calls'
Vue.use(Router)
const routes = [
{
path:'/',
name:'Home',
component:HelloWorld
},

{
path:'/calls',
name:'sampleApis',
component:calls
},
]
let router = new Router({routes})
export default router