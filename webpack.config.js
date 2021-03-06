const path = require("path")
const webpack = require("webpack")
const glob = require('glob-all')
const CopyPlugin = require("copy-webpack-plugin")
const HtmlPlugin = require("html-webpack-plugin")
const SocialTagsPlugin = require('social-tags-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const PurgeCssPlugin = require("purgecss-webpack-plugin")
const WebappPlugin = require("webapp-webpack-plugin")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const ImageminPlugin = require("imagemin-webpack-plugin").default
const CompressionPlugin = require("brotli-webpack-plugin")

const exludedFolders = [path.join(__dirname, "node_modules")]

const Social = new SocialTagsPlugin({
  appUrl: "http://haaaveyoureadtrump.surge.sh",
  facebook: {
    "og:url": "http://haaaveyoureadtrump.surge.sh",
    "og:type": "website",
    "og:title": "Haaave you read Trump ?",
    "og:image": path.resolve("src/assets/images/social/preview.jpg"),
    "og:description":
      "Besides being the 45th president of The United States and a very contraversal man, Donald Trump is also known for his absolute passion: Twitter.",
    "og:site_name": "Haaave you read Trump?",
    "og:locale": "en_US",
    "og:article:author": "Naomi Hauret",
  },
  twitter: {
    "twitter:card": "summary_large_image",
    "twitter:creator": "@naomiHauret",
    "twitter:url": "http://haaaveyoureadtrump.surge.sh",
    "twitter:title": "Haaave you read Trump ?",
    "twitter:description":
      "Besides being the 45th president of The United States and a very contraversal man, Donald Trump is also known for his absolute passion: Twitter.",
    "twitter:image": path.resolve("src/assets/images/social/preview.jpg"),
  },
})

let plugins = [
  new CopyPlugin([
    { from: "./src/assets/fonts", to: "./assets/fonts" },
    { from: "./src/assets/images/animations", to: "./assets/images/animations" },
    { from: "src/assets/images/social/preview.jpg", to: "./" },
  ]),
  new MiniCssExtractPlugin({
    filename: "assets/stylesheets/[name].[hash].css",
  }),
  new webpack.IgnorePlugin(/caniuse-lite\/data\/regions/),
]

process.env.NODE_ENV === 'production'
    ? plugins.push(
        new HtmlPlugin({
            template: "./src/index.html",
            excludeChunks: ["base"],
            filename: "200.html",
            minify: {
                collapseWhitespace: true,
                collapseInlineTagWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
            },
        }),
        new WebappPlugin({
            logo: "./src/assets/images/favicon/index.jpg",
            favicons: {
                appName: "haveyoureadtrump",
                appDescription: "Have you read Trump",
                developerName: "Naomi Hauret",
                developerURL: null,
                background: "transparent",
                theme_color: "black",
                icons: {
                    android: false,
                    appleIcon: false,
                    appleStartup: false,
                    coast: false,
                    favicons: true,
                    firefox: false,
                    windows: false,
                    yandex: false,
                },
            },
        }),
        Social,
        new PurgeCssPlugin({
            paths: glob.sync([
                path.join(__dirname, './src/**/*.html'),
                path.join(
                    __dirname,
                    './src/**/*.js',
                ),
            ]),
        }),
        new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
        new CompressionPlugin({
            algorithm: 'gzip',
            asset: '[path].gz[query]',
            test: /\.(html|js|css|svg|ttf|eot|otf|woff|ico)$/,
            minRatio: 0.8,
        }),
    )
    : plugins.push(
        new HtmlPlugin({
            template: "./src/index.html",
            filename: "index.html",
        }),
       Social,
    )


module.exports = {
  entry: {
    vendors: ["hyperapp", "@hyperapp/router", "@hyperapp/transitions", "animejs"],
    client: "./src/index.js",
  },
  output: {
    filename: "assets/scripts/[name].[hash].js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    modules: [path.resolve("./src"), path.resolve("./node_modules")],
  },
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  devtool: process.env.NODE_ENV === "production" ? false : "eval-source-map",
  optimization: {
    splitChunks: {
      chunks: "all",
    },
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          ecma: 8,
          warnings: false,
          compress: {
            warnings: false,
            conditionals: true,
            unused: true,
            comparisons: true,
            sequences: true,
            dead_code: true,
            evaluate: true,
            if_return: true,
            join_vars: true,
            drop_console: true,
            drop_debugger: true,
          },
          output: {
            comments: false,
            beautify: false,
          },
          sourceMap: false,
          pure_funcs: ["console.log"],
          toplevel: false,
          nameCache: null,
          ie8: false,
          keep_classnames: undefined,
          keep_fnames: false,
          safari10: false,
        },
      }),
    ],
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
        loader: "csv-loader",
        options: {
          dynamicTyping: true,
          header: true,
          skipEmptyLines: true,
        },
      },
      // CSS
      {
        test: /assets(\/|\\).*\.css$/,
        exclude: exludedFolders,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              minimize: process.env.NODE_ENV === "production" ? true : false,
            },
          },
          "postcss-loader",
        ],
      },
      // SVG
      {
        test: /images(\/|\\).*\.svg$/,
        exclude: exludedFolders,
        use: [
          {
            loader: "file-loader",
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
  plugins,
}
