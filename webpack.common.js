const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const dartSass = require('sass');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
	entry: {
		main: path.resolve(__dirname, 'src/scripts/index.js'),
		vendors: ['webpack-material-design-icons'],
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
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
				test: /\.(jpe?g|png|gif|svg|eot|woff|ttf|svg|woff2)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
				},
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
	],
};
