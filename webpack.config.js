    var path = require('path');

    module.exports = {
        entry: {
            index: './src/main/js/index.js',
            page2: './src/main/js/page2.js'
        },
        output: {
            path: './grails-app/assets/javascripts',
            publicPath: '/assets/',
            filename: '[name].bundle.js'
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    include: path.join(__dirname, 'src/main/js'),
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015', 'react']
                    }
                }
            ]
        }
    };
