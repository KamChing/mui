<template>
    <!-- 内容部分 -->
	<div class="advance mui-content">
	  <div class="mui-row">
	      <div v-for="item in advance" class="mui-col-sm-6 mui-col-xs-6">
	        <li class="mui-card">
	            <!--页眉，放置标题-->
	            <img class="mui-card-header" src="../assets/two.png" @click="change" />
	            <!--内容区-->
	            <h3 class="mui-card-content">{{item.text}}</h3> 
	            <!--页脚，放置补充信息或支持的操作-->
	            <router-link to="">
	              <p class="mui-card-footer">{{item.content}}</p>
	            </router-link>
	        </li>
	      </div>
	  </div>
	</div>
	<!-- 内容部分 -->
</template>
<script>
	export default {
    data () {
      return {
        advance:null
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
                  this.advance=response.data.advance;                
              },function(){
                  alert("请求不成功");
              })
        },
        change(){
          this.$router.push({ path: '/homepage/join' });
        }
    }
  }
</script>
<style>
	.advance{
		margin: 0 0 30px 0
	}
	.advance .mui-card-header {
	    left: 10%;
	}
	.advance .mui-card-content{
		text-align: center;
	}
	.mint-tab-container-item .advance p {
    line-height:25px;
}
</style>