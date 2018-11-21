const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ngAnnotatePlugin = require("ng-annotate-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');

module.exports = {
  entry: "./client/main.ts",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
    pathinfo: false
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      name: 'vendor',
      minChunks: Infinity
    }
  },
  devtool: "cheap-module-eval-source-map",
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "client/index.html",
      inject: "body",
      hash: true
    }),
    new ngAnnotatePlugin({
      add: true
    }),
    new FilterWarningsPlugin({
      exclude: /System.import/
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    hot: true,
    historyApiFallback: true,
    watchContentBase: true
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "~assets": path.resolve(__dirname, "client/assets/")
      // Templates: path.resolve(__dirname, 'src/templates/')
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: path.resolve(__dirname, "client"),
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: true,
            experimentalWatchApi: true
          }
        }
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        include: path.resolve(__dirname, "client"),
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-object-rest-spread"]
          }
        }
      },
      {
        test: /\.html$/,
        use: "raw-loader"
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: "url-loader",
        options: {
          limit: 10000
        }
      }
    ]
  }
};
