const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "build"),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
        new webpack.ProgressPlugin(),
    ]
}