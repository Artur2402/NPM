const MiniCssExractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js'
    },
    plugins: [ 
        new MiniCssExractPlugin(), 
        new HtmlWebpackPlugin({options: {
            template: "../NPM/src/index.pug",
            filename: "index.html",
        }
        }),
    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExractPlugin.loader,
                        options: {
                            esModule: true,
                        },
                    },
                    'css-loader',
                ]
            },
            {
                test: /\.pug$/,
                use: 'pug-loader'
            }
        ]
    }
}