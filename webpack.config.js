const path = require('path');

module.exports = {
    entry: {
        'jsonp': './index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        library: `jsonp`,
        libraryTarget: 'umd'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
        }]
    }
};