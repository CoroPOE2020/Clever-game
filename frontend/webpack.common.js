const path = require('path');
const nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        index: path.resolve(__dirname, "src/index.js")
    },
    target: 'node',
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ]
                    }
                }
            }
        ]
    }
};