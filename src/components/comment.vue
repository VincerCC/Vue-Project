<template>
	<div>
		<h1>发表评论</h1>
		<hr />
		<textarea placeholder="请输入你的评论，最多输入120字" maxlength="120" v-model="msg"></textarea>
		<mt-button size="large" type="primary" @click="postbtn">发表</mt-button>
		<div class="cmt-list" v-for="(item,index) in momentlist" :key="index">
			<div class="cmt-item">
				<div class="cmt-title">
					第{{index+1}}楼   用户：{{item.user_name}} 发表时间：{{item.add_time | dataFormat}}
				</div>
				<div class="cmt-body">{{item.content=='undefined'?'此用户很懒，没有发表评论':item.content}}</div>
			</div>
		</div>
		<mt-button size="large" type="danger" plain @click="getmore">加载更多</mt-button>
	</div>
	
</template>

<script>
	import axios from 'axios'
	import {Toast} from 'mint-ui'
	export default{
		data(){
			return {
				momentlist:[],
				pageindex:1,//默认页码为第一页
				msg:''
			}
		},
		props:["momentid"],
		created(){
			this.getmoments()
		},
		methods:{
			getmoments(){
				axios.get('api/getcomments/'+this.momentid+'?pageindex='+this.pageindex).then(result=>{
					this.momentlist=this.momentlist.concat(result.data.message)
					//每当获取新评论数据的时候，都要将新数据拼接到老数据后边
//console.log(result.data.message)
				})
			},
			getmore(){
				this.pageindex++;
				this.getmoments()
			},
//			postbtn(){
//				//发表评论
//				//参数一：请求的url地址
//				//参数二：提交给服务器的对象{content:this.msg}
//				//参数三：定义提交时候表单中数据的格式responseType: 'json'默认
//				this.$http.post('api/postcomment/'+this.$route.params.id,{
//					content:this.msg.trim()
//				}).then(function(){
//					var cmt={
//						user_name:'匿名用户',
//						add_time:Date.now(),
//						content:this.msg.trim()
//					}
//					this.momentlist.unshift(cmt)
//					this.msg=''
//				})
//			}
			postbtn(){
				//发表评论
				//参数一：接口路径
				//参数二：需要交给服务器的数据对象
				axios.post('api/postcomment/'+this.$route.params.id,{content:this.msg.trim()}).then(result=>{
					if(this.msg.trim()=='')
					{
						return Toast("评论不允许为空")
					}
					var cmt={
						user_name:'匿名用户',
						add_time:Date.now(),
						content:this.msg.trim()
					}
					this.momentlist.unshift(cmt)
					this.msg=''
				})
			}
		}
	}
</script>

<style>
	h1{
		font-size: 18px;
		font-weight: 900;
		color: #000000;
	}
	textarea{
		font-size: 14px;
		height: 85px;
		margin: 0;
	}
	.cmt-list{
		margin: 5px 0;
	}
	.cmt-list .cmt-item .cmt-title{
		background-color: #ccc;
		font-size: 13px;
		line-height: 35px;
	}
	.cmt-list .cmt-item .cmt-body{
		text-indent: 2rem;
		font-size: 13px;
	}
</style>