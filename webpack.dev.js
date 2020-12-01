const { merge } = require('webpack-merge');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
	mode: 'development',
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
	},
	plugins: [
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, 'src/public'),
					to: path.resolve(__dirname, 'dist/'),
					globOptions: {
						ignore: ['**/images/heros/**'],
					},
				},
			],
		}),
	],
});
