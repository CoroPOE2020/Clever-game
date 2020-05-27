const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        index: path.resolve(__dirname, "src/index.js")
    },
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
            },
            // Images
            {
                test: /\.(jpg|jpeg|png|gif)$/,
                use: {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]', // Nom du fichier généré
                    outputPath: 'assets/img/', // Destination du fichier généré dans le répertoire public
                    publicPath: 'assets/img' // Chemin relatif depuis le fichier CSS vers le dossier des images
                  }
                }
            },
            // Fonts
            {
                test: /\.(woff(2)?|ttf|eot)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/fonts/', // Je veux copier les fichiers de fonts dans le répertoire public/fonts
                        publicPath: 'assets/fonts' // J'informe à mon code CSS (dans css/style.css) que les polices de caractères seront dans le répertoire ../fonts
                      }
                },
            },
            // Icons
            {
                test: /\.(svg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/icons/', // Je veux copier les fichiers de fonts dans le répertoire public/fonts
                        publicPath: 'assets/icons' // J'informe à mon code CSS (dans css/style.css) que les polices de caractères seront dans le répertoire ../fonts
                      }
                },
            },
        ]
    }
};