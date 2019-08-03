//入口文件
import Vue from 'vue'
//导入app组件
import app from './app.vue'
//导入mint-ui顶部组件
import 'mint-ui/lib/style.css'
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
//导入轮播图
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
//导入MUI库
import './lib/MUI/css/mui.min.css'
import './lib/MUI/css/icons-extra.css'
//导入Bootstrap库
import 'bootstrap/dist/css/bootstrap.css'

//导入路由包
import VueRouter from 'vue-router'
//安装路由模块
Vue.use(VueRouter)
//导入自己的router.js模块
import router from './router.js'

//导入vue-resource完成 ajax 请求
import vueResource from 'vue-resource'
Vue.use(vueResource)

var vm=new Vue({
	el:'#app',
	data:{
	},
	methods:{},
	render:function(creatElement){
		return creatElement(app)
	},
	router:router//挂载路由对象到实例上
})
