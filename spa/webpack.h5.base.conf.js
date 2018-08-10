const path = require('path');

const HTMLWebpackPlugin = require("html-webpack-plugin");

const { VueLoaderPlugin } = require('vue-loader'); //webpack4.6开始需要引入此插件，主要由于这里使用的是vue-loader版本大于15，低于15的不需要，切记切记，不然就会鸡鸡掉

const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  mode: 'development',
  //entry: Entries,
  entry:{
    app:'./h5/app.js'
  },

  output: {
    filename: 'mall/pages/js/[name][hash].js',
    path: path.resolve(__dirname, "./mobile")
  },

  module: {
    rules: [{
      test: /\.(css|scss)$/,
      use: [
        MiniCssExtractPlugin.loader,
        //'style-loader',//抽离样式就用不到你了
        {
          loader:'css-loader',//在js文件中加载css
          options:{
            importLoaders:1,
            modules:false//模块化，将会对css名称唯一化
          }
        },
        {
          loader:'sass-loader',
        }
      ]
    },{
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
    new MiniCssExtractPlugin({
      filename:"css/[name].[hash].css",
      chunkFilename:"[id].[hash].css"
    }),
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