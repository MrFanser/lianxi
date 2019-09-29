<template>
  <div class="ele">
  	<router-link to="/">返回</router-link>
  	<el-row :gutter="0">
  	    <el-col :span="4">
  	        <div class="s4">dkls</div>
  	    </el-col>
  	    <el-col :span="20">
  	        <div class="s20">222</div>
  	    </el-col>
  	</el-row>
  	<el-row>
  		<el-col :span="5">
  		    <div class="grid-content bg-purple-dark">打开看看扩</div>
  		</el-col>
  	</el-row>
  	<el-row :gutter="20">
  	    <el-col :span="6">
  	        <div class="grid-content bg-purple"></div>
  	    </el-col>
  	    <el-col :span="6">
  	        <div class="grid-content bg-purple"></div>
  	    </el-col>
  	    <el-col :span="6">
  	        <div class="grid-content bg-purple"></div>
  	    </el-col>
  	    <el-col :span="6">
  	        <div class="grid-content bg-purple"></div>
  	    </el-col>
  	</el-row>	
	<i class="el-icon-grape"></i>
	<i class="el-icon-star-off"></i>
	<el-row>
		<el-button type="" @click="">默认按钮</el-button>
		<el-button type="primary" @click="">主要按钮</el-button>
		<el-button type="success" @click="">成功按钮</el-button>
		<el-button type="info" @click="">信息按钮</el-button>
		<el-button type="warning" @click="">警告按钮</el-button>
		<el-button type="danger" @click="">危险按钮</el-button>
	</el-row>
	<el-row>
		<el-button type="" plain>默认按钮</el-button>
		<el-button type="primary" plain>主要按钮</el-button>
		<el-button type="success" plain>成功按钮</el-button>
		<el-button type="info" plain>信息按钮</el-button>
		<el-button type="warning" plain>警告按钮</el-button>
		<el-button type="danger" plain>危险按钮</el-button>
	</el-row>
	<el-row>
		<el-button type="" round>默认按钮</el-button>
		<el-button type="primary" round>主要按钮</el-button>
		<el-button type="success" round>成功按钮</el-button>
		<el-button type="info" round>信息按钮</el-button>
		<el-button type="warning" round>警告按钮</el-button>
		<el-button type="danger" round>危险按钮</el-button>
	</el-row>
	<el-row>
		<el-button type="" icon="el-icon-search" circle></el-button>
		<el-button type="primary" icon="el-icon-edit" circle></el-button>
		<el-button type="success" icon="el-icon-check" circle></el-button>
		<el-button type="info" icon="el-icon-star-off" circle></el-button>
		<el-button type="warning" icon="el-icon-message" circle></el-button>
		<el-button type="danger" icon="el-icon-delete" circle></el-button>
	</el-row>
	<el-button type="primary" icon="el-icon-edit" @click=""></el-button>
	<el-button type="primary" icon="el-icon-search" @click="">搜索</el-button>
	<el-button type="primary" @click="">上传<i class="el-icon-upload el-icon--right"></i></el-button>
	<el-button type="primary" :loading="true" @click="">加载中</el-button>
	<el-button type="primary" icon="el-icon-upload" @click="">上传</el-button>
	<el-button type="primary" @click="">上传<i class="el-icon-search el-icon--right"></i></el-button>
	<el-button type="primary" icon="el-icon-edit" @click=""></el-button><br><br>
	<el-radio-group v-model="radio1">
		<el-radio-button label="上海"></el-radio-button>
		<el-radio-button label="北京"></el-radio-button>
		<el-radio-button label="广州"></el-radio-button>
		<el-radio-button label="深圳"></el-radio-button>
	</el-radio-group><br>
	<el-radio v-model="radio2" label="1" border>备选项1</el-radio>
	<el-radio v-model="radio2" label="2" border>备选项2</el-radio>	
  </div>
  
</template>

<script>
export default {
  data () {
      return {
        radio1: '北京',
        radio2: '1',
        // radio3: '上海',
        // radio4: '上海'
      };
    }
}
</script>

<style>
.s4{
	background-color: red;
}
.s20{
	background-color: green;
}
  .el-row {
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
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  
</style>