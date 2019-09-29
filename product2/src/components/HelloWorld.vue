<template>
  <div class="hello">
    <router-link to="/productList">商品列表</router-link>
    <router-link to="/element">element</router-link>
    <!-- <router-link to="/"></router-link> -->
    <input type="button" value="获取数据" @click="getData">
    <ul>
      <li v-for="(item,i) in resArr">
        {{item.date+item.type}}
      </li>
    </ul>
    {{$store.state.count}} <br>
    <input type="button" value="+" @click="handleAdd(Number(a))">
    <input type="button" value="-" @click="handleReduce(Number(b))">
    <br>
    <input type="button" value="异步+" @click="mutaionsAdd(Number(a))">
    <input type="button" value="异步-" @click="mutaionsReduce(Number(b))">
    <br>
    <input type="number" v-model="a"><br>
    <input type="number" v-model="b"><br>
    总数：{{$store.getters.gettersCount}}
    <br>
    <el-row :gutter="0">
        <el-col :span="4">
            <div class="e4">222</div>
        </el-col>
        <el-col :span="20">
            <div class="e2">33333</div>
        </el-col>
    </el-row>
    <router-view/>
  </div>
</template>

<script>
  import {mapActions,mapMutations,mapState,mapGetters} from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      a:0,
      b:0,
      resArr:[]
    }
  },
  methods:{
    ...mapActions({
      handleAdd:'actionsAddCount',
      handleReduce:'actionsReduceCount'
    }),
    ...mapMutations({
      mutaionsAdd:'mutationsAddCount',
      mutaionsReduce:'mutationsReduceCount'
    }),
    // handleAdd(){
    //   this.$store.commit('mutationsAddCount',Number(this.a));
    // },
    // handleReduce(){
    //   this.$store.commit('mutationsReduceCount',Number(this.b));
    // },
    // handleActionsAdd(n){
    //   this.$store.dispatch('actionsAddCount',n);
    // },
    // handleActionsReduce(n){
    //   this.$store.dispatch('actionsReduceCount',n);
    // },
    getData(){
      this.axios.get('https://www.apiopen.top/weatherApi?city=寿光')
                .then(function(res){
                  console.log(res)
                  this.resArr = res.data.data.forecast;
                }.bind(this))
                .catch(function(err){
                  console.log(err)
                })

      // this.axios.get('https://www.apiopen.top/weatherApi',{
      //   params:{
      //     city:"天津"
      //   }
      // })
      // .then((res)=>{
      //   console.log(res)
      //   this.resArr = res.data.data.forecast;
      // })
      // .catch((err)=>{
      //   console.log(err)
      // })

      // this.axios.post('/api/weatherApi',{
      //   city:'潍坊'
      // })
      // .then((res)=>{
      //   console.log(res)
      //   this.resArr = res.data.data.forecast;
      // })
      // .catch((err)=>{
      //   console.log(err)
      // })

      // this.axios({
      //   url:'/api/weatherApi',
      //   method:'post',
      //   data:{
      //     city:'上海'
      //   }
      // })
      // .then((res)=>{
      //   console.log(res);
      //   this.resArr = res.data.data.forecast
      // })
      // .catch((err)=>{
      //   console.log(err)
      // })
    }
  },
  computed:{
    ...mapState({
      c:'count'
    }),
    ...mapGetters({
      gc:'gettersCount'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.e4{
  background-color: red
}
.e2{
  background-color: green;
}
</style>
