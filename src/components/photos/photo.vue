<template>
	<div>
		<!--顶部滑动部分-->
			<div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
							推荐
						</a>
						<a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
							热点
						</a>
						<a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
							北京
						</a>
						<a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
							社会
						</a>
						<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							娱乐
						</a>
						<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							娱乐
						</a>
						<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							娱乐
						</a>
					</div>
				</div>
			</div>
		
		
		<!--图片列表部分-->
	</div>
</template>

<script>
	//导入mui的js
	import mui from '../../lib/mui/js/mui.min.js'
	//初始化滑动控件
	//刚进入 图片分享页面的时候，滑动条无法正常工作，经过我们认真的分析，发现，如果要初始化 滑动条，必须等 dom 元素加载完毕，
	//所以，我们把 初始化 滑动条 的代码，搬到了 mounted 生命周期函数中；
//	mui('.mui-scroll-wrapper').scroll({
//		deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
//	});
	export default{
		data(){
			return {}
		},
		mounted(){
				mui('.mui-scroll-wrapper').scroll({
				deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
			});
		},
		methods:{
			
		}
	}
</script>

<style scoped="scoped">
	 	*{
	 		touch-action:none;
	 	}
</style>