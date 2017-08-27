const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
title: "App Test"
})

module.exports = {
    entry: "./src.app.js",
    output: {
        path: path.resolve(__dirname, "dist");
        filename: "bundle.js";
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/}
        ]
    },
    plugins:[
        HtmlWebpackPluginConfig
    ],
    devServer:{
        inline:true,
        hot:true
    }

}