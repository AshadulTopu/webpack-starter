const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require("autoprefixer");
const HtmlWebpackSimpleIncludePlugin = require("html-webpack-simple-include-plugin");


// for manage html file
// let htmlPageNames = ['example1', 'example2', 'example3', 'example4'];
// let multipleHtmlPlugins = htmlPageNames.map(name => {
//     return new HtmlWebpackPlugin({
//         template: `./src/${name}.html`, // relative path to the HTML files
//         filename: `${name}.html`, // output HTML files
//         chunks: [`${name}`] // respective JS files
//     })
// });




module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src/js/index.js'),
    },
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        watchFiles: ['src/**/*'],
        static: './dist',
        hot: true,
        open: true,
        compress: true,
        port: 3000,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                // loader: 'html-loader',
                use: [
                    {
                        loader: 'html-loader',
                    },
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name][ext]',
                        }
                    }
                ],
                exclude: path.resolve(__dirname, 'src/index.html'),
            },
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', {
                        loader: "postcss-loader", options: {
                            postcssOptions: {
                                plugins: [autoprefixer],
                            },
                        },
                    }, 'sass-loader',
                ],
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                type: 'asset/resource',
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                        },
                    },
                    'image-webpack-loader',
                ],
                generator: {
                    filename: 'assets/images/[name][ext]',
                }
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.mjs', '.cjs', '.jsx', '.ts', '.tsx', '.json'],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/app.css',
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src", "assets"),
                    to: path.resolve(__dirname, "dist", "assets"),
                },
            ],
        }),
        new HtmlWebpackPlugin({
            // title: "Webpack Setup",
            template: path.resolve(__dirname, "src/index.html"),
            filename: "index.html",
            // chunks: ['main'],
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            // title: "Webpack Setup",
            template: path.resolve(__dirname, "src/example1.html"),
            filename: "example1.html",
            // chunks: ['example1'],
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            // title: "Webpack Setup",
            template: path.resolve(__dirname, "src/example2.html"),
            filename: "example2.html",
            // chunks: ['example2'],
            inject: 'body'
        }),
        new HtmlWebpackSimpleIncludePlugin([
            {
                tag: "<include-about />",
                content: fs.readFileSync(
                    path.resolve(__dirname, "src/partials/about.html")
                ),
            },
        ]),
        new HtmlWebpackSimpleIncludePlugin([
            {
                tag: "<include-about-me />",
                content: fs.readFileSync(
                    path.resolve(__dirname, "src/partials/about-me.html")
                ),
            },
        ]),
    ],
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        clean: true,
        // assetModuleFilename: 'assets/[name][ext]',
    },
};
