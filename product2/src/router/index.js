import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import ProductList from '@/components/ProductList'
import Vuex from '@/components/vuex'
import Element from '@/components/element'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/home',
      name:'home',
      component:home
    },
    {
      path:'/productList',
      name:'ProductList',
      component:ProductList
    },
    {
      path:'/vuex',
      name:'Vuex',
      component:Vuex
    },
    {
      path:'/element',
      name:'Element',
      component:Element
    }
  ]
})
