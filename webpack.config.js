const path = require('path');
const webpack = require('webpack');

const APP_DIR = path.resolve(__dirname, 'src', 'game.js');
const BUILD_DIR = path.resolve(__dirname, 'build');

module.exports = {
    name: "Phaser3-Boilerplate",
    mode: "development",
    entry: APP_DIR,
    output: {
            path: BUILD_DIR,
            filename: 'bundle.js',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],  
    module: {
        rules: [
                { test: /\.js$/, use: ['babel-loader'] },
                { test: /phaser-split\.js$/, use: 'raw-loader' },
                { test: [/\.vert$/, /\.frag$/], use: 'raw-loader' }
            ]
    },
    optimization: {
        minimize: true
    },
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        port: 8000
    },
    resolve: {
		alias: {
            config: path.resolve(__dirname, 'src/config'),
            objects: path.resolve(__dirname, 'src/objects'),
            scenes: path.resolve(__dirname, 'src/scenes'),
            util: path.resolve(__dirname, 'src/util')
		}
    }
}

