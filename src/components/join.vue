<template>
	<div class="join">
		<img src="../assets/join.jpg" width="100%" alt="">
		<!-- navabr切换显示不同内容 -->
		<mt-navbar class="mui-slider-indicatorcode mui-segmented-control mui-segmented-control-inverted mui-scroll" v-model="selected">
		  <mt-tab-item class="mui-control-item" id="1">加盟流程</mt-tab-item>
		  <mt-tab-item class="mui-control-item" id="2">加盟政策</mt-tab-item>
		  <mt-tab-item class="mui-control-item" id="3">加盟优势</mt-tab-item>
		  <mt-tab-item class="mui-control-item" id="4">加入我们</mt-tab-item>
		</mt-navbar>
		
		<!-- 用于测试当前选中的是第几个选项卡 -->
		<!-- <div>  
		  <mt-cell class="page-part" title="当前选中">{{ selected }}</mt-cell>
		</div>  -->

		<!-- tab-container -->
		<mt-tab-container v-model="selected">
		  <mt-tab-container-item id="1">
		    <p>1.考察当地消费市场状况及发展趋势;</p>
		    <p>2.向总部索取相关资料，或以电话、传真、网上留言等方式向总部咨询合作;</p>
		    <p>3.到总部所在地进行项目考察，并与总部工作人员进行业务交流确定投资规模等；</p>
		    <p>4.双方确认考察结果无争议，正式签订代理合同；</p>
		    <p>5.进行相应培训(施工、门店话术等）;</p>
		    <p>6.领取授权书、开业赠品、全套施工工具、物流配送完毕，人员到位，准备开业。</p>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="2">
		   
		  </mt-tab-container-item>
		  <mt-tab-container-item id="3">
		    <v-advance></v-advance>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="4">
		    <v-form></v-form>
		  </mt-tab-container-item>
		</mt-tab-container>

		<!-- navabr切换显示不同内容 -->
	</div>
</template>
<script>
import form from './form.vue'
import advance from './advance.vue'
export default {
    name: 'homepage',
    data () {
      return {
        selected:'1',
      }
    },
    components:{
    	'v-form':form,
    	'v-advance':advance
    }
}
</script>
<style>
	.join{
		margin: 20px 0 30px 0
	}

	.join .mint-navbar .mint-tab-item.is-selected{
	    color: #8FC320;
	}
	.join .mint-navbar .mint-tab-item-label {
	    color: inherit;
	    font-size: 16px;
	    line-height: 1;
    }
	.mint-tab-container-item{
		text-align: left
	}
	.mint-tab-container-item p{
		line-height: 50px;
		font-size: 15px;
	}
	
</style>