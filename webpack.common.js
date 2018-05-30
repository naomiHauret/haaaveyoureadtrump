const path = require("path")
const webpack = require("webpack")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin")
const SocialTagsPlugin = require('social-tags-webpack-plugin')
const Dotenv = require("dotenv-webpack")

const exludedFolders = [path.join(__dirname, "node_modules")]

module.exports = {
	entry: ["./src/index.js"],
	output: {
		filename: "assets/scripts/[name].[hash].js",
		path: path.resolve(__dirname, "dist"),
	},
	resolve: {
		modules: [path.resolve("./src"), path.resolve("./node_modules")],
	},
	module: {
		rules: [
			// JS
			{
				test: /\.js$/,
				exclude: exludedFolders,
				use: "babel-loader",
			},
			{
				test: /\.csv$/,
				loader: 'csv-loader',
				options: {
					dynamicTyping: true,
					header: true,
					skipEmptyLines: true
				}
			},
			// CSS
			{
				test: /assets(\/|\\).*\.css$/,
				exclude: exludedFolders,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader?importLoaders=1!postcss-loader",
				}),
			},
			// SVG
			{
				test: /images(\/|\\).*\.svg$/,
				exclude: exludedFolders,
				use: [
					{
						loader: "raw-loader",
						options: {
							name: "assets/images/[name].[ext]",
						},
					},
				],
			},
			// Images
			{
				test: /\.(png|jpg|jpeg|gif)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "assets/images/[name].[ext]",
						},
					},
				],
			},
			// Music
			{
				test: /\.(mp3|wav|ogg|flac)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "assets/music/[name].[ext]",
						},
					},
				],
			},
			// Fonts
			{
				test: /\.(ttf|eot|woff|woff2)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							publicPath: "./../fonts/",
							outputPath: "assets/fonts/",
							name: "[name].[ext]",
						},
					},
				],
			},
		],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new Dotenv(),
		new CopyPlugin([{ from: "./src/assets/fonts", to: "./assets/fonts" }, { from: "./src/assets/images/animations", to: "./assets/images/animations"}]),
		new ExtractTextPlugin({
			filename: "assets/stylesheets/[name].[hash].css",
			allChunks: true,
		}),
		new SocialTagsPlugin({
			appUrl: "http://haaaveyoureadtrump.surge.sh",
			facebook: {
				"og:url": "http://haaaveyoureadtrump.surge.sh",
				"og:type": "website",
				"og:title": "Have you read Trump ?",
				'og:image': path.resolve('src/assets/images/social/preview.jpg'),
				"og:description": "",
				"og:site_name": "Have you read Trump?",
				"og:locale": "en_US",
				"og:article:author": "Naomi Hauret",
			},
			twitter: {
				"twitter:card": "summary_large_image",
				"twitter:creator": "@naomiHauret",
				"twitter:url": "http://haaaveyoureadtrump.surge.sh",
				"twitter:title": "Have you read Trump ?",
				"twitter:description":
					"Have you read Trump ?",
				"twitter:image": path.resolve('src/assets/images/social/preview.jpg'),
			},
		}),
		new webpack.IgnorePlugin(/caniuse-lite\/data\/regions/),
	],
}
