<template>
	<div class="content">
		<!-- 轮播图 -->
		<app-banner :listImg="listImg"></app-banner>

		<!-- Join us -->
		<div class="join">
		  <h2>招商加盟</h2>
		  <div>Join us</div>
		</div>
		<!-- Join us --> 

		<!-- 内容部分 -->
		<div class="mui-content">
		  <div class="mui-row">
		      <div v-for="item in leagues" class="mui-col-sm-6 mui-col-xs-6">
		        <li class="mui-card">
		            <!--页眉，放置标题-->
		             <img class="mui-card-header" src="../assets/two.png" @click="change" />
		            <!--内容区-->
		            <h3 class="mui-card-content" @click="change">{{item.text}}</h3>
		            <!--页脚，放置补充信息或支持的操作-->
		            <router-link to="/homepage/join">
		              <p class="mui-card-footer">{{item.content}}</p>
		            </router-link>
		        </li>
		      </div>
		  </div>
		</div>
		<!-- 内容部分 -->

		<!-- Product-->
		<div class="display">
		  <h2>产品展示</h2>
		  <div>Product</div>
		</div>
		<!-- Product-->

		<!-- navabr切换显示不同内容 -->
		<mt-navbar class="mui-slider-indicatorcode mui-segmented-control mui-segmented-control-inverted mui-scroll" v-model="selected">
		  <mt-tab-item class="mui-control-item" id="1">青茶系列</mt-tab-item>
		  <mt-tab-item class="mui-control-item" id="2">绿茶系列</mt-tab-item>
		  <mt-tab-item class="mui-control-item" id="3">黑茶系列</mt-tab-item>
		  <mt-tab-item class="mui-control-item" id="4">花果茶系列</mt-tab-item>
		</mt-navbar>
		
		<!-- 用于测试当前选中的是第几个选项卡 -->
		<!-- <div>  
		  <mt-cell class="page-part" title="当前选中">{{ selected }}</mt-cell>
		</div>  -->

		<!-- tab-container -->
		<mt-tab-container v-model="selected">
		  <mt-tab-container-item id="1">
		    <div class="mui-content">
		      <div class="mui-row">
		          <div class="mui-col-sm-6 mui-col-xs-6">
		              <li class="mui-table-view-cell">
		                <img width="100%" src="../assets/nav1.jpg" alt=""> 
		                <router-link to="/homepage/tea"><h4>{{Oolong.TeaText}}</h4></router-link>
		              </li>
		          </div>
		      </div>
		    </div>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="2">
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
		  </mt-tab-container-item>
		  <mt-tab-container-item id="3">
		    <div class="mui-row">
	          <div v-for="item in black" class="mui-col-sm-6 mui-col-xs-6">
	              <li class="mui-table-view-cell">
	                <img width="100%" src="../assets/nav1.jpg" alt=""> 
	                <h4>{{item.TeaText}}</h4>
	              </li>
	          </div>
	      	</div>
		  </mt-tab-container-item>
		  	  <mt-tab-container-item id="4">
		  	    <div class="mui-row">
		            <div v-for="item in Herb" class="mui-col-sm-6 mui-col-xs-6">
		                <li class="mui-table-view-cell">
		                  <img width="100%" src="../assets/nav1.jpg" alt=""> 
		                  <h4>{{item.TeaText}}</h4>
		                </li>
		            </div>
		        	</div>
		  	  </mt-tab-container-item>
		</mt-tab-container>
		<!-- navabr切换显示不同内容 -->
		
		<!-- News-->
		<div class="News">
		  <h2>新闻资讯</h2>
		  <div>News</div>
		</div>
		<!-- News-->
		
		<!-- NewsList -->
		<ul v-for="item in NewsList" class="mui-table-view">
		    <li class="mui-table-view-cell mui-media">
		        <a href="javascript:;">
		            <img class="mui-media-object mui-pull-left" src="../assets/thumb1.jpg">
		            <div class="mui-media-body">
		                <h4>{{item.newsTitle}}</h4>
		                <span class="mui-ellipsis-2" style="-webkit-line-clamp:3">{{item.newscontent}}</span>
		            </div>
		        </a>
		    </li>
		</ul>
		<!-- NewsList -->

		<!-- About-->
		<div class="About">
		  <h2>关于我们</h2>
		  <div>About</div>
		</div>
		<!-- News-->
		
		<img class="about" width="100%" src="../assets/About.jpg" alt="关于">
		<span class="Abouttext">XX茶叶有限公司始创于上世纪50年代。经半个多世纪的发展，公司已发展成为集茶叶种植生产、加工、销售及研发于一体的现代化茶业企业。为促进四川地区茶叶产业发展，在公司创建之初便承袭了具有百年历史的“蜀涛”品牌，并为此设立了四川省蜀涛茶业有限公司对其进行全程的品牌、质量管理。</span>
		<span class="Abouttext">目前XX茶业已拥有一座投资5000多万元、占地约130亩的现代化茶叶加工工厂。全套引进日本全自动茶叶生产流水线，年生产能力1500吨，技术水平、生产能力居西南地区一流。在四川峨眉山、青城山、雅安名山及成都蒲江拥有生态环境良好、茶叶品种优良的茶叶基地近5万亩，实行统一规划、统一种植、统一管理、统一采摘的发展模式进行品质管理，并通过了无公害农产品基地的权威认证。是四川省农业产业化重点龙头企业，“中国茶业行业百强”企业。</span>
		<span class="Abouttext">“XX茶业”以对消费者负责，做好茶品质的态度，经过数十年的耕耘，被省工商局授予“XX省著名商标”称号，其产品被评为XX省“名牌产品”，并获得“全国三绿工程茶叶放心服务品牌”的称号。目前，XX公司已形成绿茶、花茶、青茶、黑茶四大产品系列，近百种产品。特别值得一提的是。</span>
	</div>
</template>	

<script>
	//引入轮播组件 
	import Banner from './Banner.vue'
	// 引入轮播图片
	import a from '../assets/1.jpg'
	import b from '../assets/2.jpg'

	export default {
	    name: 'homepage',
	    data () {
	      return {
	        listImg: [
	          {
	            url: a
	          },
	          {
	            url: b
	          }
	        ],
	        selected:'1',
	        leagues:null,
	        NewsList:null,
	        Oolong:null,
	        Green:null,
	        black:null
	      }
	    },
	    mounted:function(){
	        this.getData();
	    },
	    methods:{
	      // 获取json数据
	        getData(){
	          this.$http.get('../../../static/dataJson/content.json').then(
	              function(response){
	                  // alert("请求成功");
	                  // console.log(response.data);
	                  this.leagues=response.data.leagues;
	                  this.NewsList=response.data.NewsList;
	                  this.Oolong=response.data.tea.Oolong;
	                  this.Green=response.data.tea.Green;
	                  this.black=response.data.tea.black;
	     		      this.Herb =response.data.tea.Herb ;
	              },function(){
	                  alert("请求不成功");
	              })
	        },
	        change(){
	          this.$router.push({ path: '/homepage/join' });
	        }
	    },
	    components: {
	      'app-banner': Banner,
	    }
	  }
	
</script>

<style>
	/*鼠标放上去，图片变大*/
	.mui-card-header:hover {
	    transform: scale(1.4);
	}
	.mui-content .mui-card-header{
	  left:10%;
	}
	.homepage.mui-content .mui-table-view-cell{
	  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
	}
	.mui-media-body{
		text-align: left;
		font-size:13px;
	}
	.mui-table-view-cell > a:not(.mui-btn) {
	    white-space: inherit;
	    color: inherit;
	}
	.content .mint-navbar .mint-tab-item.is-selected{
	    color: #fff;
	    border-bottom: 2px solid #999;
	    background: #87c1b8;
	    margin-bottom: 0
	}

	.join,.display,.News,.About{
	  padding:25px;
	}
	
	.content .mint-tab-container-item .mui-table-view-cell{
		-webkit-box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
	    margin-right: 12px;
	}
	.mint-tab-item-label{
		font-size:15px;
	}
	.mui-table-view a{
	  color: #000;
	  text-decoration: none;
	}
	.mui-table-view .mui-ellipsis-2{
	  text-align: left
	}
	.homepage .mui-table-view .mui-media-object {
	  line-height: 42px;
	  max-width: 76px;
	  height: 66px;
	}

	.Abouttext{
	  display: block;
	  text-indent: 2em;
	  text-align: left;
	  line-height:40px;
	}

	img.about{
	  margin-bottom: 20px;
	}
</style>
