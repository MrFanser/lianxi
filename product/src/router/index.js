import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Product from '@/components/Product'
import About from '@/components/About'
import Not from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
      	{
      		path:'home',
      		name:'Home',
      		component:Home
      	},
      	{
      		path:'/product',
      		name:'Product',
      		component:Product
      	}
      ],
      redirect:'/home'
    },
    {
    	path:'/about',
    	name:'About',
    	component:About
    },
    {
    	path:'*',
    	name:'Not',
    	component:Not
    }
  ]
})
