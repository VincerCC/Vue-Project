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