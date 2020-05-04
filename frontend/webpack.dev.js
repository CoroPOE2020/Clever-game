const path = require("path");
const merge = require("webpack-merge");

const commonWebpackFile = require("./webpack.common.js");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(commonWebpackFile, {
    mode: "development",
    devServer: {
        //contentBase: path.resolve(__dirname, 'src'),
        //watchContentBase: true,
        open: true,
        port: 3000
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