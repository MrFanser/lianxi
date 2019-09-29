<tenplate>
	
</template>
<script>
	export default{
		data(){
			return{
				resArr:[]
			}
		},
		methods:{
			getData(){


				this.axios.get('',{
					params:{
						city:''
					}
				})
				.then((res)=>{
					this.resArr = res.data.data.forecast
				})
				.catch((err)=>{
					console.log(err)
				})



				this.axios.get('')
				.then((res)=>{
					this.resArr = res.data.data.forecast
				}.bind(this))
				.catch((err)=>{
				console.log(err)
				})


				this.axios.post('/api(代理)/',{
					city:''
				})
				.then((res)=>{
					this.resArr = res.data.data.forecast
				})
				.catch((err)=>{
					console.log(err)
				})



				this.axios({
					url:'',
					method:'post',
					data:{
						city:''
					}
				})
				.then((res)=>{
					this.resArr = res.data.data.forecast
				})
				.catch((err)=>{
					console.log(err)
				})
			}
		}
	}
</script>
