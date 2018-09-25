
var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: [
		path.join(__dirname, '../index.js')
	],
	module: {
		rules: [{
			test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ["@babel/preset-env","@babel/preset-react"]
				}
			},{
				test: /\.less$/,
				loaders: ["style-loader", "css-loader", "less-loader"]
			}
		]
	},
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: path.join(__dirname, '../'),
		historyApiFallback: true
	},
	mode: 'production'
}