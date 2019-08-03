import VueRouter from 'vue-router'
import home from './components/tabbars/home.vue'
import member from './components/tabbars/member.vue'
import shopcar from './components/tabbars/shopcar.vue'
import search from './components/tabbars/search.vue'
//创建路由对象
var router=new VueRouter({
	routes:[//配置路由规则
		{path:'/home',component:home},
		{path:'/member',component:member},
		{path:'/shopcar',component:shopcar},
		{path:'/search',component:search}
	],
	linkActiveClass:'mui-active'//覆盖默认的路由高亮类router-link-active
})

//把路由暴露出去
export default router