const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // 单独打包CSS

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        index:'./src/boot/index'
    },
    output: {
        path: path.join(process.cwd(), 'dist'),
        filename: '[name].[chunkhash].js',
        chunkFilename: '[id].[chunkhash].js'
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                exclude: [/node_modules/],
                loaders: ['vue-loader']
            },
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                loaders: ['babel-loader']
            },

            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('less-loader')
            },

            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
            },
            {
                test: /\.(ico|jpg|png|gif|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
                loader: 'file-loader',
                query: {
                  name: 'img/[name].v[hash:7].[ext]'
                }
            },
            {
                test: /\.json/,
                loader: 'json'
            },
            {
                test: /\.svg$/,
                loader: 'raw-loader'
            }
        ]
    },
    plugins:[
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin({ filename: '[name].[hash].css', disable: false, allChunks: true }),
        new webpack.DllReferencePlugin({
          context: __dirname,
          manifest: require('./manifest.json')
        }),
        new CopyWebpackPlugin([
          {
            from: path.join(process.cwd(), './src/resource'),
            to: './resource'
          }
        ]),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(process.cwd(), './index.html'),
            chunks: ['manifest','index','vendor'],
            inject: true
        })

        //多入口配置
        // new HtmlWebpackPlugin({
        //     filename: 'tool.html',
        //     template: path.resolve(__dirname, './tool.html'),
        //     chunks: ['manifest','tool','vendor'],
        //     inject: true
        // })
    ],
    resolve: {
        extensions: ['.js', '.vue', '.css', '.json'],
        alias: {
            '@utils': path.join(__dirname, '../src/utils'),
            '@boot': path.join(__dirname, '../src/boot'),
            '@resource': path.join(__dirname, '../src/resource'),
            '@pages': path.join(__dirname, '../src/pages'),
            '@components': path.join(__dirname, '../src/components'),
            '@router': path.join(__dirname, '../src/router'),
            '@vuex': path.join(__dirname, '../src/vuex')
        }
    }
};
