const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = (env, argv) => ({
    mode: argv.mode === 'production' ? 'production' : 'development',
    target: 'node',
    externals: [nodeExternals()],
    entry: {
        main: './src/main.ts',
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                        },
                    },
                ],
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },

    output: {
        path: path.resolve(__dirname, 'lib'),
        clean: true,
    },
    plugins: [
        new webpack.DefinePlugin({
            global: {}, // Fix missing symbol error when running in developer VM
        }),
    ],
});
