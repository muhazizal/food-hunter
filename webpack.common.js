const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const dartSass = require('sass');

module.exports = {
	entry: path.resolve(__dirname, 'src/scripts/index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			// Style loader
			{
				test: /\.s[ac]ss$/i,
				exclude: path.resolve(__dirname, 'src/styles/main.scss'),
				use: [
					'raw-loader',
					{
						loader: 'sass-loader',
						options: {
							sassOptions: {
								includePaths: [path.resolve(__dirname, 'node_modules')],
							},
						},
					},
				],
			},
			{
				test: /\.(s[ac]ss|css)$/i,
				exclude: path.resolve(__dirname, 'src/styles/components'),
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							// Prefer `dart-sass`
							implementation: dartSass,
						},
					},
				],
			},
			// File loader
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				loader: 'file-loader',
			},
			// Url loader
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				use: ['url-loader'],
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/templates/index.html'),
			filename: 'index.html',
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, 'src/public/'),
					to: path.resolve(__dirname, 'dist/'),
				},
			],
		}),
	],
};
