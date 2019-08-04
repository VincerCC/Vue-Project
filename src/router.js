import VueRouter from 'vue-router'
import home from './components/tabbars/home.vue'
import member from './components/tabbars/member.vue'
import shopcar from './components/tabbars/shopcar.vue'
import search from './components/tabbars/search.vue'
import newlist from './components/news/newslist.vue'
import newsinfo from './components/news/newsinfo.vue'
//创建路由对象
var router=new VueRouter({
	routes:[//配置路由规则
		{path:'/',redirect:'/home'},
		{path:'/home',component:home},
		{path:'/member',component:member},
		{path:'/shopcar',component:shopcar},
		{path:'/search',component:search},
		{path:'/home/newslist',component:newlist},
		{path:'/home/newsinfo/:id',component:newsinfo}
	],
	linkActiveClass:'mui-active'//覆盖默认的路由高亮类router-link-active
})

//把路由暴露出去
export default router