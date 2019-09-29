<template>
  <div class="product">
  	<h2>商品列表</h2>
  	<router-link to="/" tag="li">首页</router-link>
  	<ul>
  		<li v-for="(g,i) in goods" :key="i">
  			<h4>{{g.name}}</h4>
  			<p>{{g.desc}}</p>
  			<b>&yen;{{g.price}}</b>
  			<br>
  			<input type="button" value="查看详情" @click="viewDetails(g.id)">
  		</li>
  	</ul>
  </div>
</template>

<script>
export default {
  data(){
  	return{
  		goods:[
  			{
  				id:'1',
  				name:'phone',
  				desc:'very good',
  				price:9.8
  			},
  			{
  				id:'2',
  				name:'computer',
  				desc:'very good',
  				price:19.8
  			},
  			{
  				id:'3',
  				name:'match',
  				desc:'very good',
  				price:29.8
  			},
  			{
  				id:'4',
  				name:'tv',
  				desc:'very good',
  				price:39.8
  			},
  			{
  				id:'5',
  				name:'mouse',
  				desc:'very good',
  				price:49.8
  			},
  		]
  	}
  },
  methods:{
  	viewDetails(id){
  		// this.$router.push({
  		// 	path:'/productDetails',
  		// 	query:{
  		// 		id
  		// 	}
  		// })

  		this.$router.push({
  			name:'ProductDetails',
  			query:{
  				id
  			}
  		})

  		// this.$router.push({
  		// 	name:'ProductDetails',
  		// 	params:{
  		// 		id
  		// 	}
  		// })
  	}
  }
}
</script>

<style>
li{
	/*margin:0;
	padding:0;*/
	text-align: center;
	list-style-type: none;
}
</style>