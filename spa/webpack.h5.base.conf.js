const path = require('path');

const HTMLWebpackPlugin = require("html-webpack-plugin");

const { VueLoaderPlugin } = require('vue-loader'); //webpack4.6开始需要引入此插件，主要由于这里使用的是vue-loader版本大于15，低于15的不需要，切记切记，不然就会鸡鸡掉



module.exports = {
  mode: 'development',
  //entry: Entries,
  entry:{
    app:'./h5/app.js'
  },

  output: {
    filename: 'js/[name][hash].js',
    path: path.resolve(__dirname, "./mobile")
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    }, {
      test: /\.vue$/,
      exclude: /node_modules/,
      loader: 'vue-loader'
    }]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },

  plugins: [
    new VueLoaderPlugin(),
    new HTMLWebpackPlugin({
      filename: "./index.html",
      title:"Index",
      template: "./h5/app.html",
      chunks: ['app', 'commons', 'manifest'],
    })
  ],
  optimization: {
    runtimeChunk: {
      name: "manifest"
    },
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "commons",
          chunks: "all"
        }
      }
    }
  }
}