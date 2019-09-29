<template>
  <div class="list">
  	<h2>商品列表</h2>
  	<ul>
  		<li v-for="(g,i) in goods" :key="i">
  			<h4>{{g.name}}</h4>
  			<p>{{g.desc}}</p>
  			<b>&yen;{{g.price}}</b>
  			<input type="button" value="查看详情" @click="view(g.id)">
  		</li>
  	</ul>
  	<router-link to="/">返回</router-link>
    <router-link to="/home">返回首页</router-link>
  </div>
</template>

<script>
export default {
  data(){
  	return{
  		goods:[
  			{
  				id:'0001',
  				name:"雪碧",
  				desc:'550ml碳水混合物',
  				price:3
  			},
  			{
  				id:'0002',
  				name:"可口可乐",
  				desc:'2L碳水混合物',
  				price:6
  			},
  			{
  				id:'0003',
  				name:"七喜",
  				desc:'1.5L碳水混合物',
  				price:4
  			},
  			{
  				id:'0004',
  				name:"美年达",
  				desc:'550ml碳水混合物',
  				price:4
  			},
  			{
  				id:'0005',
  				name:"百事可乐",
  				desc:'550ml碳水混合物',
  				price:3
  			}
  		]
  	}
  }
}
</script>

<style>

</style>