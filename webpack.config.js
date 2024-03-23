const MiniCssExractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin')
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devServer: {
        static: './dist',
        hot: true,
        port: 8081,
        open: true,
    },
    stats: {
        children: false,
        entrypoints: true,
    },
    devtool: 'inline-source-map',
    output: {
        filename: 'main.js'
    },
    plugins: [ 
        new MiniCssExractPlugin(), 
        new HtmlWebpackPlugin({options: {
            title: 'Development',
            template: "../NPM/src/index.pug",
            filename: "index.html",
        }
        }),
        new ESLintPlugin({files: './src/**/*.{vue,scss}'}),
        new StylelintPlugin({files: './src/**/*.{vue,scss}'})
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
    },

    optimization: {
        minimizer: true,
        minimizer: [
            new TerserWebpackPlugin(),
            new CssMinimizerPlugin({minimizerOptions: {
                preset: [
                    'default',
                    {
                        discardComments: {removeAll: true}
                    },   
            ]
            }})
        ]
    },
};