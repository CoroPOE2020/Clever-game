const path = require("path");
const merge = require("webpack-merge");

const commonWebpackFile = require("./webpack.common.js");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(commonWebpackFile, {
    mode: "development",
    devServer: {
        // TODO: Fix Sockjs error
        contentBase: path.resolve(__dirname, 'src'),
        watchContentBase: true,
        host: '0.0.0.0',
        port: 3000,
        disableHostCheck: true
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "public/index.html"
        })
    ],
});