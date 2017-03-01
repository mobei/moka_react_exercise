const path = require('path');
const webpack = require('webpack');
const config = require('./config');

//plugins
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
    context: path.resolve(__dirname, config.contextPath), //基础目录，绝对路径，配置文件的起点

    entry: {
        index: config.entry,
        vender: config.venders
    },

    output: {
        path: path.resolve(__dirname, config.outputPath),
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
            use: ['style-loader', 'css-loader', 'sass-loader'],
        }, {
            test: /\.(png|jpg)$/,
            use:['url-loader?limit=8192']
        }]
    },
    plugins: [
        //分离第三方库vender
        new CommonsChunkPlugin({
            names:['vender','manifest']
        }),

        //生成html
        new HtmlWebpackPlugin({
            title: 'moka',
            template: './index.html',
        }),
    ],

    devServer: {
        contentBase: path.resolve(__dirname, config.contextPath),
        port: 3000,
    },
};