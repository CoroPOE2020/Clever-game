const path = require("path");
const merge = require("webpack-merge");

const commonWebpackFile = require("./webpack.common.js");

const BabelMinifyWebpackPlugin = require("babel-minify-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require('autoprefixer');


module.exports = merge(commonWebpackFile, {
    mode: "production",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [autoprefixer()]
                        }
                    },
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new BabelMinifyWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "public/index.html",
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true,
                removeComments: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: "[name].bundle.css"
        }),
        new CleanWebpackPlugin()
    ]
});