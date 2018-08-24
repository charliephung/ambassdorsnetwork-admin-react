const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
var BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: path.join(__dirname, "/dist"),
    publicPath: "/",
    filename: "index_bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.js$|\.jsx$/,
        exclude: /node_modules/,
        loaders: ["babel-loader?presets[]=react"]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      },
      {
        test: /\.jpe?g$|\.gif$|\.png|\.svg$|\.woff$|\.woff2$|\.eot$|\.ttf$|\.wav$|\.mp3$|\.ico$/,
        loader: "file-loader"
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: "html-loader"
          },
          {
            loader: "markdown-loader",
            options: {
              /* your options here */
            }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: [path.join(__dirname, "src"), "node_modules"],
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
    // new BundleAnalyzerPlugin()
  ],
  devServer: {
    contentBase: "./dist",
    historyApiFallback: true,
    hot: true
  },
  devtool: "cheap-eval-source-map"
};
