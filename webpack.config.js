/*
webpack中的配置可以覆盖webpackrc中的配置项
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const theme = require('./package').theme;

// module.exports =
module.exports = function (webpackConfig, env) {
  const buildEnv = process.env.BUILD_ENV === 'pro' ? '生产环境'
    : process.env.BUILD_ENV === 'test' ? '测试环境' : '开发环境';
  console.log(`当前正在生成${buildEnv}的代码。。。。。。。。。。。。。。。。。。`);
  webpackConfig.plugins.push(
    new webpack.DefinePlugin({
      DEV_ENV: JSON.stringify(process.env.DEV_ENV),
      BUILD_ENV: JSON.stringify(process.env.BUILD_ENV),
    }),
  );
  const isProduction = process.env.NODE_ENV === 'production';

  // 开发环境压缩JS
  if (isProduction) {
    webpackConfig.plugins.push(
      new webpack.LoaderOptionsPlugin({
        minimize: false,
        debug: false,
      }),
    );
  }

  webpackConfig.module.rules.forEach((item) => {
    // console.log(item)
  });
  return webpackConfig;
};
