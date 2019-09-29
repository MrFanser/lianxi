<template>
  <div class="hello">
   <router-link to="/home">首页</router-link>
   <router-link to="/product">商品</router-link>
   <router-link to="/about">关于</router-link>

   <router-view/>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<style scoped>
a{
  color:#000;
}
a:hover{
  text-decoration: underline;
}
</style>
