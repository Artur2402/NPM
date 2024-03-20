const MiniCssExractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js'
    },
    plugins: [new MiniCssExractPlugin],

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
            }
        ]
    }
}