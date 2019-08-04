<template>
	<div class="newsinfo">
		<h3 class="title">{{newsinfo.title}}</h3>
		<p class="time">
			<span>发表时间：{{newsinfo.add_time|dataFormat}}</span>
			<span>点击：{{newsinfo.click}}次</span>
		</p>
		<hr>
		<div class="content" v-html="newsinfo.content"></div>
		<!--<div class="content" >{{newsinfo.content}}</div>因为里边数据带有html标签，所以需要用v-html渲染-->
	</div>
</template>

<script>
	export default{
		data(){
			return {
				id:this.$route.params.id,
				newsinfo:{}//将url地址中传递的id值挂载到data中
			}
		},
		created(){
			this.getNewsInfo()
		},
		methods:{
			getNewsInfo(){
				this.$http.get('api/getnew/'+this.id).then(result=>{
					if(result.body.status==0){
						this.newsinfo=result.body.message[0]
					}
				})
			}
		}
	}
</script>

<style scoped="scoped">
	.newsinfo{
		padding: 0 4px;
	}
	.newsinfo .title{
		font-size: 16px;
		margin: 15px 0;
		text-align: center;
		color: red;
		white-space: nowrap;/*取消自动换行*/
		overflow: hidden;/*隐藏超出部分*/
		text-overflow: ellipsis;/*超出部分设置为.*/
	}
	.newsinfo .time{
		display: flex;
		justify-content: space-between;
		font-size: 13px;
		color: dodgerblue;
	}
	.newsinfo .content{
		
	}
</style>