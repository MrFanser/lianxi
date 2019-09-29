<template>
  <div class="home">
  	<p>{{receivedMsg}}</p>
  	<router-link to="/">hello world</router-link>
  	<!-- <router-view> -->
  </div>
</template>

<script>
export default {
  data(){
  	return{
  		receivedMsg:this.$route.query.msg
  	}
  }
}
</script>

<style>

</style>