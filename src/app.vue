<template>
	<div class="app-container">
		<!--顶部header区域-->	
		<mt-header fixed title="vue项目案例"></mt-header>
		
		
		<!--中间的路由router-view区域-->
		
		
		
		<!--底部的路由tabbar区域-->
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">通讯录</span>
			</router-link>
			
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>

			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
		<router-view></router-view>
	</div>
</template>

<script>

</script>

<style>
	*{
		margin:0;
		padding: 0;
	}
	.app-container{
		margin-top: 40px;
	}
</style>