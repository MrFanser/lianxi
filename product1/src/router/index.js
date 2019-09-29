import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Product from '@/components/Product'
import ProductDetails from '@/components/ProductDetails'
import Home from '@/components/Home'
import Active from '@/components/Active'
import A1 from '@/components/A1'
import A2 from '@/components/A2'
import A3 from '@/components/A3'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path: '/product',
    	name: 'Product',
    	component: Product
    },
    {
    	path: '/productDetails',
    	name: 'ProductDetails',
    	component: ProductDetails
    },
    {
    	path:'/home',
    	name:'Home',
    	component:Home
    },
    {
    	path:'/active',
    	name:'Active',
    	component:Active,
    	children:[
    		{
    			path:'/active/a1',
    			name:'A1',
    			component:A1
    		},
    		{
    			path:'/active/a2',
    			name:'A2',
    			component:A2
    		},
    		{
    			path:'/active/a3',
    			name:'A3',
    			component:A3
    		}
    	]
    }
  ]
})
