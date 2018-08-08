const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const baseWebpackConf = require('./webpack.h5.base.conf');


module.exports = merge(baseWebpackConf, {
    
    // cheap-module-eval-source-map is faster for development
    devtool: '#source-map',
    mode:'production',
    plugins: [
        new CleanWebpackPlugin(["mobile"]),
        new webpack.DefinePlugin({//定义全局变量
            __DEV__: false
        })
    ]
  })