var path = require('path');
var webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    devtool: "cheap-eval-source-map",
    watch: process.env.NODE_ENV == 'local' ? true : false,
    watchOptions: {
        poll: 1000,
        ignored: /node_modules/
    },
    entry: {
        app: ['babel-polyfill', './main.jsx'],
        vendor: ['react', 'react-dom', 'redux'],
    },
    resolve: {
      alias: {
        Src: path.resolve(__dirname, 'src/'),
        Sass: path.resolve(__dirname, 'src/sass/'),
        Components: path.resolve(__dirname, 'src/components/')
      },
      extensions: ['*', '.scss', '.css', '.js', '.jsx', '.json'],
      modules: ['src', 'node_modules']
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, "wwwroot", "static")
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
            },
            {
                test: /\.scss|.css$/,
                loader: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: 'css-loader?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]'
                })
            },
            {
                test: /\.(jpg|jpeg|gif|png|woff|eot|ttf)$/,
                exclude: /node_modules/,
                loader:'url-loader?limit=100000'
            },
            {
              test: /node_modules/,
              loader: 'ify-loader'
            },
            {
              test: /\.svg$/,
              loader: 'svg-sprite-loader'
            },
            { test: /\.(glsl|frag|vert)$/, loader: 'raw-loader' },
            { test: /\.(glsl|frag|vert)$/, loader: 'glslify' }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest'],
            minChunks: Infinity
        }),
        new ExtractTextPlugin('styles.css'),
        new webpack.ProvidePlugin({
          'util': path.resolve(__dirname, './util')
        }),
        new webpack.EnvironmentPlugin(['NODE_ENV'])
    ]
};
