<template>
	<div class="tea">
		<!-- 面包屑 -->
		<el-breadcrumb separator="/">
		  <el-breadcrumb-item :to="{ path: '/' }"><i class="fa fa-home" aria-hidden="true"></i>网站首页</el-breadcrumb-item>
		  <el-breadcrumb-item>
		  	<el-dropdown>
			  <span class="el-dropdown-link">
			    产品展示<i class="el-icon-caret-bottom el-icon--right"></i>
			  </span>
			  <el-dropdown-menu slot="dropdown">
			    <el-dropdown-item>青茶</el-dropdown-item>
			    <el-dropdown-item>绿茶</el-dropdown-item>
			    <el-dropdown-item>黑茶</el-dropdown-item>
			    <el-dropdown-item>双皮奶花果茶</el-dropdown-item>
			  </el-dropdown-menu>
			</el-dropdown>
		  </el-breadcrumb-item>
		  <el-breadcrumb-item>青茶系列</el-breadcrumb-item>
		</el-breadcrumb>
		<img src="../assets/nav1.jpg" width="100%" />
		<h4>{{Oolong.TeaText}}</h4>
		<p class="description">{{Oolong.description}}</p>
		<ul class="detail">
			<li>净含量：{{Oolong.weight}}</li>
			<li>质量等级：{{Oolong.grade}}</li>
			<li>建议零售价：{{Oolong.price}}</li>
		</ul>

		<!-- 详细信息 -->
		<mt-navbar class="mui-slider-indicatorcode mui-segmented-control mui-segmented-control-inverted mui-scroll" v-model="selected">
		  <mt-tab-item class="mui-control-item" id="1"><span class="info">详细信息</span></mt-tab-item>
		</mt-navbar>
		<!-- 详细信息 -->
		
		<!-- 详细信息内容 -->
		<mt-tab-container v-model="selected">
		  <mt-tab-container-item id="1" class="description descriptions">
		    {{Oolong.description}}
		  </mt-tab-container-item>
		</mt-tab-container>
		<!-- 详细信息内容 -->

		<img src="../assets/detail.jpg" alt="" width="100%">

		<!-- 热门推荐 -->
		<div class="hot">热门推荐</div>
		<!-- 热门推荐 -->
		
		<!-- 热门推荐内容 -->
		<div class="mui-content">
	      <div class="mui-row">
	          <div v-for="item in Green" class="mui-col-sm-6 mui-col-xs-6">
	              <li class="mui-table-view-cell">
	                <img width="100%" src="../assets/nav1.jpg" alt=""> 
	                <h4>{{item.TeaText}}</h4>
	              </li>
	          </div>
	      </div>
	    </div>
		<!-- 热门推荐内容 -->

	</div>	
</template>

<script>
	export default {
	    data () {
	      return {
	        Oolong:null,
	        Green:null,
	        black:null,
	        selected:'1'
	      }
	    },
	    mounted:function(){
	        this.getData();
	    },
	    methods:{
	      // 获取json数据
	        getData(){
	          this.$http.get('../../../static/dataJson/tea.json').then(
	              function(response){
	                  // alert("请求成功");
	                  // console.log(response.data);
	                  this.Oolong=response.data.Oolong;
	                  this.Green=response.data.Green;
	                  this.black=response.data.black;
	     		      this.Herb =response.data.Herb ;
	              },function(){
	                  alert("请求不成功");
	              })
	        }   
	    }
	  }
</script>
<style>
	.tea{
		padding:20px 10px 30px 10px;

	}
	.fa-home{
	    font-size: 15px;
	}
	.el-icon--right{
		font-size: 9px;
	}
	.tea .el-breadcrumb__item__inner, .el-breadcrumb__item__inner a{
		color:#8fc320;
	}

	.tea .el-breadcrumb__item__inner .el-dropdown .el-dropdown-link{
		color:#8fc320;
	}
	.el-dropdown-menu .el-dropdown-menu__item{
		font-size:14px;
	}
	.tea .el-breadcrumb__item:last-child .el-breadcrumb__item__inner{
		color:#8fc320;
	}
	
	.tea .description{
		text-align: left;
		padding:0 0 20px 0;
	}
	
	.tea .mint-tab-item-label {
	    font-size: 15px;
	    left: 0;
	    text-align: left;
	    color:#8fc320;
	}
	.tea .mint-navbar .mint-tab-item{
	    border-bottom: 3px solid #eee;
	    margin-bottom: 20px;
	}
	.tea .info{
		padding: 14px;
   		border-bottom: 3px solid #8fc320;
	}
	.tea .descriptions{
	    line-height: 36px;
	    letter-spacing: 4px;
	}

	ul.detail{
		list-style: none;
		padding: 0 0 0 12px;
	}   
	ul.detail li{
		text-align: left;
	    line-height: 28px;
	    padding: 0;
	}

	div.hot{
		padding:30px;
		text-align: left;
		font-size:15px;
	}
</style>