<template>
  <div class="productDetails">
  	商品详情
  	<p>{{received}}</p>
  	<router-link to='product'>返回商品列表</router-link>
  </div>
</template>

<script>
export default {
  data(){
  	return{
  		received:this.$route.query.id
  		// received:this.$route.params.id,
  	}
  }
}
</script>

<style>

</style>