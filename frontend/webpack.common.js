const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:3000/',
        path.resolve(__dirname, "src/index.js")
    ],
    // {
    //     index: path.resolve(__dirname, "src/index.js")
    // },
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
                },
                exclude: /node_modules/
            }
        ]
    }
};