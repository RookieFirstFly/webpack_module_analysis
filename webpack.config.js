const pathLib = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
let options = {
    mode:"development",
    entry: {
        commonJs_sync_index: pathLib.resolve(__dirname, "./src/commonJs_sync_index.js"),
        es_sync_index: pathLib.resolve(__dirname, "./src/es_sync_index.js"),
        async_index: pathLib.resolve(__dirname, "./src/async_index.js")
    },
    output: {
        path: pathLib.resolve(__dirname, "./dist"),  //出口位置
        publicPath: '',
        //initial chunk命名
        filename: 'js/[name].initial.js',
        //no-initial chunk命名
        chunkFilename: 'js/async/[name].chunk.[id].[contenthash].js',
        clean: true,
    },
    watch: true,
    watchOptions: {
        poll: 1000, // 每秒询问多少次
        aggregateTimeout: 500,  //防抖 多少毫秒后再次触发
        ignored: /node_modules/ //忽略时时监听
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack_module_analysis_commonJs_sync',
            filename: 'commonJs_sync_index.html',
            template: 'index.html',
            chunks: ['commonJs_sync_index'],
            minify: {
                removeComments: true,
                collapseWhitespace: false,
                removeAttributeQuotes: true
            }  
        }),
        new HtmlWebpackPlugin({
            title: 'webpack_module_analysis_es_sync',
            filename: 'es_sync_index.html',
            template: 'index.html',
            chunks: ['es_sync_index'],
            minify: {
                removeComments: true,
                collapseWhitespace: false,
                removeAttributeQuotes: true
            }  
        }),
        new HtmlWebpackPlugin({
            title: 'webpack_module_analysis_async',
            filename: 'async_index.html',
            template: 'index.html',
            chunks: ['async_index'],
            minify: {
                removeComments: true,
                collapseWhitespace: false,
                removeAttributeQuotes: true
            }  
        })
    ]
}
module.exports = options;

