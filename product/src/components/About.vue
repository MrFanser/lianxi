<template>
  <div class="about">
  	<div class="btn">
	  	<input type="search">
	  	<input type="button" value="按钮">	
  	</div>
  	<router-link to="/home">返回首页</router-link>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
.about{
	height: 400px;
	background-position: center;
	background-repeat: no-repeat;
	background-image: url('/static/image/1.jpg');
}
.btn{
	/*position: absolute;*/
	/*left: 40%;*/
	padding-top:180px;
}
[type=search]{
	width: 300px;
	height: 30px;
	border: none;
	border-radius: 3px;
	opacity:.7;
}
[type=button]{
	width: 50px;
	height: 30px;
	/*background-color: transparent;*/
	opacity:.8;
	border:none;
}
router-link{
	color: #fff;
}
a{
	color:#fff;
	text-decoration: none;
}
</style>