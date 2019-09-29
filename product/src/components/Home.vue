<template>
  <div class="home">
	<img v-for="(s,i) in imgs" :src="s" alt="" :key="i">
	<div class="img" v-for='n in num'></div>
  </div>
</template>

<script>
export default {
  data(){
  	return{
  		imgs:[
  			'/static/image/1.jpg',
  			'/static/image/2.jpg',
  			'/static/image/3.jpg',
  			'/static/image/4.jpg',
  			'/static/image/5.jpg',
  			'/static/image/6.jpg',
  			'/static/image/7.jpg',
  			'/static/image/8.jpg',
  		]
  	}
  },
  computed:{
  		num(){
  			return 3-this.imgs.length%3;
  		}
  	}
}
</script>

<style>
.home{
	height: 650px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	align-content: space-around;
}
img{
	width: 300px;
	height: 200px;
}
.img{
	width: 300px;
	height: 200px;
}
</style>