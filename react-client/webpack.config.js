// Created using this tutorial https://www.toptal.com/react/webpack-react-tutorial-pt-1
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

module.exports = function(_env, argv) {
  const isProduction = argv.mode === "production";
  const isDevelopment = !isProduction;

  return {
    devtool: isDevelopment && "cheap-module-source-map",
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "assets/js/[name].[contenthash:8].js",
      publicPath: "/"
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              cacheCompression: false,
              envName: isProduction ? "production" : "development"
            }
          }
        },
        {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader"
          ]
        },
        {
          test: /\.(eot|otf|ttf|woff|woff2)$/,
          loader: require.resolve("file-loader"),
          options: {
            name: "static/media/[name].[hash:8].[ext]"
          }
        },
        new webpack.DefinePlugin({
          "process.env.NODE_ENV": JSON.stringify(
            isProduction ? "production" : "development"
          )
        }),
        {
          devServer: {
            compress: true,
            historyApiFallback: true,
            open: true,
            overlay: true,
            proxy: {
              '/api': 'http://localhost:2424',
            },
           }
        }
      ]
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts"]
    }
  };
};