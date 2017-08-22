<template>
	<div class="header">
		<!-- 固定的头部 -->
		<mt-header fixed title="">
		  <!-- 左侧logo -->
		  <router-link to="/" slot="left">
		    <img src="../assets/logo.png" alt="网站名称" title="网站名称">
		  </router-link>
		  <!-- 右侧图标 -->
		  <router-link to="/" slot="right">
		    <span><i class="fa fa-bars" aria-hidden="true"></i></span>
		  </router-link> 
		</mt-header>
		<!-- 固定的头部 -->
	</div>
</template>
<script>
	
</script>
<style>
	.header header.mint-header{
      background-color: #fff;
      z-index:999;
      height:58px;
    }
    .header .mint-header-button.is-right {
        color: #76838f;
        font-size:18px;
    }
</style>