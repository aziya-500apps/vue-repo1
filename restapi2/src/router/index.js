import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
//import pro1 from '../components/pro1'
import calls from '../components/calls'
Vue.use(Router)
const routes = [
{
path:'/',
name:'Home',
component:HelloWorld
},
/*{
path:'/pro1',
name:'Project',
component:pro1
},*/
{
path:'/calls',
name:'sampleApis',
component:calls
},
]
let router = new Router({routes})
export default router