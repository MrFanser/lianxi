<template>
  <div class="hello">
    hello world
    <br>
    <el-row :gutter="0">
        <el-col :span="4">
            <div>222</div>
        </el-col>
        <el-col :span="20">
            <div>33333</div>
        </el-col>
    </el-row>
    <router-link to="product">商品列表</router-link>
    <router-link :to="{
      path:'/home',
      query:{
        msg
      }
    }">
      兄嘚，去首页得啦
    </router-link>
    <ul>
      <router-link tag='li' to="/home">首页</router-link>
    </ul>
    <router-link to="/active">aaa</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg:'来自hello world的消息'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*    .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }*/
</style>
