<template>
  <div class="active">
  	<router-link to="/home">首页</router-link>
  	<router-link to="/product">商品</router-link>
  	<router-link to="/" exact>hello world</router-link>
  	<br>
  	<router-link to="/active/a1">A1</router-link>
  	<router-link to="/active/a2">A2</router-link>
  	<router-link to="/active/a3">A3</router-link>
  	<router-view/>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
.router-link-active{
	background-color:grey; 
}
</style>