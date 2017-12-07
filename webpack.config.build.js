const path = require('path'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    webpack = require('webpack');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

var config = {
    cache:true,
    devtool: 'source-map', //source-map
    entry: {
        index:path.resolve(__dirname, 'src/main')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    resolve:{
        extensions:['','.web.js','.js','.json','.jsx']
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
            exclude:/node_modules/,
            query: {
                presets: ['es2015', 'stage-0', 'react'],
                plugins: ["transform-class-properties","transform-runtime","babel-plugin-transform-decorators-legacy",["antd",{libraryName:"antd",style:"css"}]]
            },
            include:__dirname
        }, {
            test: /\.less/,
            loader: ExtractTextPlugin.extract('style','css!less')
        },{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style','css')
        }, {
            test: /\.(jpg|png)$/,
            loader: 'url?limit=8192'
        }]
    },
    plugins:[
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings : false
            }
        }),
        new webpack.DllReferencePlugin({
            context:__dirname,
            manifest:require('./dist/vendor-manifest.json')
        }),
        new ExtractTextPlugin("[name].css"),
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify("production")
            }
        }),
        new HtmlWebpackPlugin({
            title:"demo",
            hash:true,
            template:'index.html'
        }),
        new webpack.optimize.DedupePlugin()
    ]
};

module.exports = config;
