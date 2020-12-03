const isDevelopment = process.env.NODE_ENV === ' development';
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dartSass = require('sass');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: {
		main: path.resolve(__dirname, 'src/scripts/index.js'),
		vendors: ['webpack-material-design-icons'],
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.(s[ac]ss|css)$/i,
				use: [
					isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							implementation: dartSass,
						},
					},
				],
			},
			{
				test: /\.(jpe?g|png|gif|svg|eot|woff|ttf|svg|woff2)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
				},
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				use: ['url-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/templates/index.html'),
			filename: 'index.html',
		}),
		new WebpackPwaManifest({
			filename: 'manifest.json',
			name: 'Food Hunter',
			short_name: 'Food Hunter',
			orientation: 'portrait',
			display: 'standalone',
			description: 'Food Hunter',
			background_color: '#fafafa',
			theme_color: '#fafafa',
			'theme-color': '#fafafa',
			ios: {
				'apple-mobile-web-app-title': 'Food Hunter',
				'apple-mobile-web-app-status-bar-style': 'black',
				'apple-mobile-web-app-capable': 'yes',
			},
			crossorigin: 'anonymous',
			start_url: '/',
			icons: [
				{
					src: path.resolve('./src/public/images/favicon.png'),
					sizes: [96, 128, 192, 256, 384, 512],
					destination: path.join('images', 'icons', 'android'),
					purpose: 'maskable',
				},
				{
					src: path.resolve('./src/public/images/favicon.png'),
					sizes: [120, 152, 167, 180, 1024],
					destination: path.join('images', 'icons', 'ios'),
					ios: true,
					purpose: 'maskable',
				},
				{
					src: path.resolve('./src/public/images/favicon.png'),
					sizes: 1024,
					destination: path.join('images', 'icons', 'ios'),
					ios: 'startup',
					purpose: 'maskable',
				},
			],
		}),
		new WorkboxWebpackPlugin.InjectManifest({
			swSrc: './src/scripts/sw.js',
			swDest: 'sw.js',
		}),
		new ImageminWebpackPlugin({
			plugins: [
				ImageminMozjpeg({
					quality: 50,
					progressive: true,
				}),
			],
		}),
		new MiniCssExtractPlugin(),
	],
};
