const { merge } = require('webpack-merge')
const path = require('path')
const common = require('./webpack.common')

module.exports = merge(common, {
	mode: 'development',
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		writeToDisk: true,
		proxy: {
			'/api': {
				target: 'https://restaurant-api.dicoding.dev',
				changeOrigin: true,
				secure: true,
				pathRewrite: { '^/api': '' },
			},
		},
	},
})
