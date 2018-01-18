var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        app: ['babel-polyfill', './src/main.jsx'],
        vendor: ['react', 'react-dom', 'redux'],
    },
    resolve: {
      alias: {
        Src: path.resolve(__dirname, 'src'),
        Components: path.resolve(__dirname, 'src/components/')
      }
    },
    watch: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, "wwwroot", "static"),
        publicPath: '/'
    },
    devServer: {
      historyApiFallback: true,
    },
    module: {
        loaders: [
            {
                test: /(\.js|\.jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-1'],
                    plugins: ['transform-runtime']
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest'],
            minChunks: Infinity
        })
    ]
};
