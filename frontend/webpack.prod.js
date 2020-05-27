const path = require("path");
const merge = require("webpack-merge");

const commonWebpackFile = require("./webpack.common.js");

const BabelMinifyWebpackPlugin = require("babel-minify-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const AutoPrefixerPlugin = require('autoprefixer');
const CopyPlugin = require('copy-webpack-plugin');


module.exports = merge(commonWebpackFile, {
    mode: "production",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "assets/js/[name].bundle.js"
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
                            plugins: () => [AutoPrefixerPlugin()]
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
            filename: "assets/css/style.bundle.css"
        }),
        new CleanWebpackPlugin(),
        new CopyPlugin([
            { from: 'src/assets', to: 'assets' }
        ])
    ]
});