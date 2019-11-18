const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    // optimization: {
	// 	minimize: false
	// },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: [
                        '@babel/preset-env',
                        { 'plugins': ['@babel/plugin-proposal-class-properties']}
                    ]
                }
            }
        ]
    }
}