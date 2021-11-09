const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const path = require('path')
const config = require('config')
const autoprefixer = require('autoprefixer')
const cssMQParcker = require('css-mqpacker')

const PORT = config.get('port')
const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const getMode = () => (isDev ? 'development' : 'production')

const getOptiomization = () => {
	const config = {
		splitChunks: {
			chunks: 'all',
		},
	}

	if (isProd) {
		config.minimizer = [new OptimizeCssAssetsWebpackPlugin(), new TerserWebpackPlugin()]
	}

	return config
}

const getStyleLoader = loader => {
	const defaultLoader = [
		MiniCssExtractPlugin.loader,
		'css-loader',
		{
			loader: 'postcss-loader',
			options: {
				postcssOptions: {
					plugins: [autoprefixer(), cssMQParcker()],
				},
			},
		},
	]
	if (loader) defaultLoader.push(loader)

	return defaultLoader
}

module.exports = {
	context: path.resolve(__dirname, 'client', 'src'),
	mode: getMode(),
	entry: {
		main: ['@babel/polyfill', './index.js'],
	},
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'client', 'dist'),
	},
	plugins: [
		new HTMLWebpackPlugin({
			filename: 'index.html',
			template: './index.html',
		}),
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css',
		}),
	],
	performance: {
		maxEntrypointSize: 512000,
		maxAssetSize: 512000,
	},
	devtool: isDev ? 'source-map' : 'nosources-source-map',
	optimization: getOptiomization(),
	devServer: {
		port: PORT,
		hot: isDev,
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: getStyleLoader(),
			},
			{
				test: /\.s[ca]ss$/,
				use: getStyleLoader('sass-loader'),
			},
			{
				test: /\.html$/i,
				loader: 'html-loader',
				options: {
					minimize: isProd,
				},
			},
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
		],
	},
}
