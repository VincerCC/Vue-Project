<template>
	<div>
		<mt-swipe :auto="4000">
		  <mt-swipe-item v-for="item in lunbotuList" :key="item.src">
		  	<img :src="item.img" alt=""/>
		  </mt-swipe-item>
		</mt-swipe>
		<div class="ulbox">
			<ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
		            	<router-link to='/home/newslist'>
		            		<span class="mui-icon mui-icon-extra mui-icon-extra-new"></span>
		                    <div class="mui-media-body">新闻资讯</div>
		            	</router-link>
		            </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <span class="mui-icon mui-icon-image"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <span class="mui-icon mui-icon-extra mui-icon-extra-gold"></span>
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <span class="mui-icon mui-icon-extra mui-icon-extra-topic"></span>
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <span class="mui-icon mui-icon-extra mui-icon-extra-classroom"></span>
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <span class="mui-icon mui-icon-extra mui-icon-extra-addpeople"></span>
		                    <div class="mui-media-body">联系我们</div></a></li>
		            
		        </ul>
		</div>
		        
	</div>
</template>

<script>
	import {Toast} from 'mint-ui'
	export default{
		data(){
			return {
				lunbotuList:[]//保存轮播图数据
			}
		},
		created(){
			this.getLunbotu()
		},
		methods:{
			getLunbotu(){
				//获取轮播图数据
				this.$http.get('api/getlunbo').then(result=>{
					if(result.body.status==0){//成功
						this.lunbotuList=result.body.message;
					}else{//失败
						Toast('加载失败~')
					}
					
				})
			}
		}
	}
</script>

<style scoped="scoped">
	.mint-swipe{
		height: 300px;
	}
	.mint-swipe-item img{
		width: 100%;
		height: 100%;
	}
	.ulbox ul{
		background-color: white;
		border: none;
	}
	.ulbox ul li{
		border: none !important;
	}
	.mui-media-body{
		font-size:12px !important;
	}
</style>