const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.config');

const BUILD_ENV = process.env.BUILD_ENV;
const config = {
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new (require('webpack-bundle-analyzer').BundleAnalyzerPlugin)(),
  ],
  devServer: {
    contentBase: base.output.path,
    port: 4000,
    index: `index.${BUILD_ENV}.html`,
    hot: true,
    https: true,
    historyApiFallback: {
      index: 'index.dev.html',
    },
    proxy: {
      '/api': {
        target: `http://www.zerotop.top:8582`,
        // target: 'http://localhost:5001/',
        pathRewrite: {
          '^/api': ''
        }
      },
      '/web-library': {
        target: `http://www.zerotop.top:8582`,
        //target: `http://service-ssefi.${BUILD_ENV}.sumscope.com:7998`
      },
    },
  },
};

module.exports = merge(base, config);
