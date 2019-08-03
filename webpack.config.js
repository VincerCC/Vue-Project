const path=require('path')
const htmlWebpackPlugin=require('html-webpack-plugin')
const VueLoaderPlugin=require('vue-loader/lib/plugin')
module.exports={
	entry:path.join(__dirname,'./src/main.js'),//入口,要打包的文件
	output:{//输出文件
		path:path.join(__dirname,'./dist'),//指定打包好的文件，输出到哪个目录去
		filename:'bundle.js'//指定输出到的文件名称
	},
	plugins:[
	//创建一个在内存中生成html页面的插件
	new htmlWebpackPlugin({
		//指定模板页面地址，将来会根据这个地址，去生成内存中的页面
		template:path.join(__dirname,'./src/index.html'),
		filename:'index.html'//指定生成页面的名称
		
	}),
	new VueLoaderPlugin()
	],
	module:{
		//这个节点用于配置所有而第三方模块加载器
		rules:[
			{test:/\.css$/,use:['style-loader','css-loader']},
			{test:/\.vue$/,use:'vue-loader'},
			{test:/\.(eot|svg|ttf|woff|woff2)$/,use:[{loader:'url-loader'}]}

		]
		}
//	resolve:{
//		alias:{
//			"vue$":"vue/dist/vue.js"
//			//修改vue被导入时候包的路径
//		}
//	}
}