const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    devServer: {
        static: './dist',
        hot: false,
        port: 8081,
        open: true,
    },
    stats: 'errors-only',
    output: {
        filename: 'main.js'
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            title: 'Production',
            template: './src/index.pug',
            filename: 'index.html'
        }),
        new ESLintPlugin(),
        new StylelintPlugin()
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                    esModule: true,
                },
            }, 
                'css-loader'
            ]
        }, {
            test: /\.pug$/, 
            loader: 'pug-loader',
            options: {
				pretty: true
			}
        }]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserWebpackPlugin({}),
            new CssMinimizerPlugin({
                minimizerOptions: {
                    preset: [
                        'default',
                        {
                            discardComments: { removeAll: true},
                        },
                    ],
                },
            }),
        ],
    },
};