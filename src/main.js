//入口文件
import Vue from 'vue'
//导入app组件
import app from './app.vue'
//导入mint-ui顶部组件
import 'mint-ui/lib/style.css'
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
//导入MUI库
import './lib/MUI/css/mui.min.css'

//导入Bootstrap库
import 'bootstrap/dist/css/bootstrap.css'


var vm=new Vue({
	el:'#app',
	data:{
	},
	methods:{},
	render:function(creatElement){
		return creatElement(app)
	}
})
