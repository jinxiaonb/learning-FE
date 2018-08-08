var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackSpaConf = require('./webpack.h5.base.conf')


module.exports = merge(baseWebpackSpaConf, {
    devServer: {
        contentBase: "./",
        historyApiFallback: true,
        inline: true,
        hot: true,
        port:8090,
        // proxy: { //代理接口
        //   '/': {
        //     target: 'http://localhost',
        //     changeOrigin: true,
        //     secure: false
        //   }
        // }
      },
    // cheap-module-eval-source-map is faster for development
    devtool: '#cheap-module-eval-source-map',
    mode:'development',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),//热启动
        new webpack.DefinePlugin({ //定义全局变量
            __DEV__: true
        })
    ]
  })