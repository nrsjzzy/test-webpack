var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var webpack = require('webpack');
//var TEM_PATH = path.resolve(APP_PATH, 'templates');

module.exports = {
	//项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
	entry: {
		index: APP_PATH + '/js/index.js'
			//mobile: APP_PATH + '/mobile.js',
			//vendors: ['webpack-zepto']
	},
	//输出的文件名 合并以后的js会命名为bundle.js
	output: {
		path: BUILD_PATH,
		filename: 'js/[name].js'
	},
	devServer: {
		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true,
	},
	//代码出错后会采用source-map的形式直接显示你出错代码的位置
	devtool: 'eval-source-map',
	//定义对模块的处理逻辑,一个对象
	module: {
		loaders: [{
			test: /\.scss$/,
			loader: ExtractTextPlugin.extract("style", "css!sass", {
				publicPath: '../'
			}),
			//loaders: ['style', 'css'],
			include:APP_PATH, //字符串或者数组，指包含的文件夹
			exclude: '' //字符串或数组，指排除的文件夹
		}, {
			test: /\.(png|jpg)$/,
			loader: 'url-loader?limit=4000&name=img/[name].[ext]'
		}, {
			test: /\.jsx?$/,
			loader: 'babel',
			include: APP_PATH,
			query: {
				presets: ['es2015']
			}
		}],
		//定义插件一个数组

	},
	plugins: [
		new ExtractTextPlugin("css/[name].css"),
		/*new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),*/
		//new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),

		//把全局变量插入到所有的代码中，在config.js中配置
		/*new webpack.ProvidePlugin({
			$: 'webpack-zepto'
		}),*/
		new HtmlwebpackPlugin({
			title: 'index',
			template: /*'html-withimg-loader!'+用于页面里面引用图片处理路径*/APP_PATH + '/index.html',
			filename: 'index.html',
			//chunks这个参数告诉插件要引用entry里面的哪几个入口
			chunks: ['index'],
			//要把script插入到标签里
			inject: 'body'

		})

	]
}