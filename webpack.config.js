const path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    webpack = require('webpack');

const ENV = process.env.NODE_ENV = process.env.ENV = 'development';

const config = {
    cache:true,
    devtool: 'eval',
    entry: {
        index:['webpack/hot/dev-server', 'react-hot-loader/patch', path.resolve(__dirname, 'src/main')]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    resolve:{
        extensions:['','.web.js','.js','.json','.jsx'],
        alias: {
            'images': path.join(__dirname, './src/images'),
        },
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
        },{
            test: /\.(eot|svg|ttf|woff|woff2)\w*/,
            loader: 'url?limit=8192'
        }, {
            test: /\.less/,
            loader: 'style!css!less'
        },{
            test: /\.css$/,
            loader: 'style!css'
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
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify(ENV)
            }
        }),
        new HtmlWebpackPlugin({
            title:"demo",
            hash:true,
            template:'index.html'
        })
    ]
};

module.exports = config;
