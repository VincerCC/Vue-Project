//入口文件
import Vue from 'vue'
//导入app组件
import app from './app.vue'
//导入mint-ui顶部组件
import 'mint-ui/lib/style.css'
import {Header} from 'mint-ui';
Vue.component(Header.name, Header);
//导入轮播图
import {Swipe,SwipeItem} from 'mint-ui';
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);
//导入button
import {Button} from 'mint-ui';
Vue.component(Button.name, Button);
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
//设置请求数据的根路径
Vue.http.options.root='http://www.liulongbin.top:3005';
Vue.http.options.emulateJSON='true';

//导入axios
import axios from 'axios'
//设置数据根路径
axios.defaults.baseURL = 'http://www.liulongbin.top:3005';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//导入moment时间插件
import moment from 'moment'
//定义全局过滤器
Vue.filter('dataFormat',function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
	//moment()//直接调用将会得到当前时间
	return moment(dataStr).format(pattern)//传入指定时间
})
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
