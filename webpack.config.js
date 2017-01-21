/**
 * Created by jiaojiaodebook on 17/1/18.
 */
const path = require('path');
const webpack = require('webpack');
/*const CleanPlugin = require('clean-webpack-plugin');*/

module.exports = {
  entry: {
    app: ['./src/app.js']
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    publicPath: '/build/',
    chunkFilename: '[name].min.js?[hash:8]'
  },
  module: {
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loader: 'babel'},
      {test: /\.css$/, loader: "style!css?sourceMap!postcss"},
      {test: /\.less$/, loader: "style!css!less|postcss"},
      {test: /\.scss$/, loader: "style!css!sass|postcss"}],
  },
  plugins: [
    /*// 在打包前清空 build/ 文件夹
    new CleanPlugin('./build/'),*/
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.less']
  },
  debug: true
};
