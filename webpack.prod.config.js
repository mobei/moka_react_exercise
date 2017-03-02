const path = require('path');
const webpack = require('webpack');
const config = require('./config');

//plugins
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

webpackConf = config.webpack;

module.exports = {
    context: path.resolve(__dirname, webpackConf.contextPath), //基础目录，绝对路径，配置文件的起点

    entry: {
        index: webpackConf.entry,
        vender: webpackConf.venders
    },

    output: {
        path: path.resolve(__dirname, webpackConf.outputPath),
        filename: '[name].[hash].js',
    },

    module: {
        rules: [{
            test: /\.js[x]?$/,
            use: [{
                loader: 'babel-loader',
                // options: { presets: ['es2015'] },
            }],
        }, {
            test: /\.css/,
            use: ["style-loader", "css-loader"]
        }, {
            test: /\.(sass|scss)$/,
            exclude: '/node_modules/',
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                loader: "css-loader!sass-loader"
            })
        }, {
            test: /\.(png|jpg)$/,
            use:['url-loader?limit=8192']
        }]
    },
    plugins: [
        //分离第三方库vender
        new CommonsChunkPlugin({
            names:['vender', 'manifest']
        }),

        //生成html
        new HtmlWebpackPlugin({
            title: webpackConf.htmlTitle,
            template: webpackConf.htmlTemplate,
        }),

        new ExtractTextPlugin({
            filename: 'style.[contenthash].css',
            disable: false,
            allChunks: true
        }),
    ]
};