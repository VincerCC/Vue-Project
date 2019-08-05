###很牛逼

##制作首页
1.完成header区域，使用的是Mint-UI中的header组件
2.制作tabbar区域，使用的是MUI中的tabber组件
	+在制作购物车图标时候，先把扩展图标的icons-extra.css样式拷贝到项目中
	+也要拷贝fonts下边的mui-icons-extra.ttf文件到项目中
3.中间区域放置一个router-view来展示路由匹配到的组件

##改造tabbar为router-link

##点击tabbar的路由连接，展示对应的路由组件

##轮播图制作

##加载轮播图数据
1.获取数据，使用vue-resource, cnpm i vue-resource -S  安装
2.使用vue-resource的this.$http.get('')获取数据
3.将获取到的数据放到data的lunbotuList上
4.用v-for循环渲染每一项

##九宫格区域
1.用MUI提供的九宫格
2.设置样式

##创建新闻路由连接
1.绘制界面，使用MUI中的media-list.html
2.使用vue-resource获取数据

##main.js中创建全局过滤器格式化时间格式
1.先安装时间插件 cnpm i moment -S
2.main.js中导入moment

##实现新闻资讯列表点击跳转到新闻详情
1.把列表的每一项a标签改造为router-link
2.创建新闻详情组件页面newsinfo.vue
3.在路由模块中，将新闻详情的	路由地址	和	新闻详情	对应起来

##评论区域设置
	1.加载更多:
		1.绑定点击事件
		2.点击后拿到下一页数据，pageindex++，再调用getmoments()
		3.加载下一页，应该用concat将新数据拼接到老数据后边
	2.发表评论：
		1.文本框双向数据绑定
		2.发表按钮绑定事件
		3.校验评论内容是否为空，如果为空提示用户输入不为空
		4.通过vue-resource发送请求，保存评论
		5.刷新列表，在客户端，手动拼接出一个最新的评论对象，然后调用数组的unshift()方法，
			把最新的评论追加到data中momentlist的开头位置
			
			
##图片列表
	1.制作顶部的滑动条
		坑a：需要借助于MUI中的tab-top-webview-main.html
		坑b：MUI提供的slider中包含mui-fullscreen类，作用是强制全屏显示，需要取消这个类，否则顶部会挤到最上面
		坑c：刚开始不能滑动，需要导入mui.js文件，然后初始化scroll
				初始化：mui('.mui-scroll-wrapper').scroll({
							deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
						});
		坑d：引入mui.js后会报错,需要在样式中增加 * { touch-action: none; } ,然后备份tabbar样式，参照https://blog.csdn.net/qq_35737292/article/details/84938043
			
	2.制作底部的图片列表
