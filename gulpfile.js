/**
 * Created by xuanjiu on 17/1/19.
 */
var gulp = require('gulp');
var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var config = require("./webpack.config.js");
var path = require('path');
del = require('del');

gulp.task('clean', function(){
  del([
      './build/**/*',
    ]);
  console.log('clean!');
});

gulp.task('dev', ['clean'], function() {
  var newConfig = Object.create(config);
  console.log(newConfig);

  config.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/", "webpack/hot/only-dev-server");
  console.log(config);
  var compiler = webpack(config);
  var server = new webpackDevServer(compiler, {
    contentBase: path.resolve( __dirname ,'./'),
    hot: true,
    publicPath: "/build/",
    headers: { "X-Custom-Header": "yes" },
    stats: { colors: true }
  });
  server.listen(8080);
});
