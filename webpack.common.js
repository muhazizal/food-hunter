const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, 'src/scripts/index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			// Sass / Scss loader
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							// Prefer `dart-sass`
							implementation: require('sass'),
							sassOptions: {
								fiber: false,
							},
						},
					},
				],
			},
			// File loader for images
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/,
				use: ['file-loader'],
			},
			// Url loader for images
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/,
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
		new FaviconsWebpackPlugin({
			logo: path.resolve(__dirname, 'src/public/images/icons/logo.jpg'),
		}),
	],
};
