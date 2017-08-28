const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
title: "App Test",
template: "./src/index.ejs",
})

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {test: /\.js$/, use: ['babel-loader'], exclude: path.resolve(__dirname, "node_modules")},
            {test: /\.jsx$/, use: ['babel-loader'], exclude: path.resolve(__dirname, "node_modules")},
            {test: /\.css$/, use: ['style-loader', 'css-loader'], exclude: path.resolve(__dirname, "node_modules")}
        ]
    },
    plugins:[
        HtmlWebpackPluginConfig
    ],
    devServer:{
        inline:true,
        hot:true,
        port:8080
    }

}