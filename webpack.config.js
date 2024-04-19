const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    // mode: 'production',
    entry: {
        main: path.resolve(__dirname, 'src/js/index.js'),
        // test: path.resolve(__dirname, 'src/js/test.js'),
        // test2: path.resolve(__dirname, 'src/js/test2.js'),
    },
    output: {
        // filename: 'js/main.js',
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        assetModuleFilename: 'assets/[name][ext]',
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        hot: true,
        open: true,
        compress: true,
        port: 3000,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
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
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
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
            },
            // {
            //     test: /\.(png|svg|jpg|jpeg|gif)$/i,
            //     type: 'asset/resource',
            // },
            // {
            //     test: /\.(woff|woff2|eot|ttf|otf)$/i,
            //     type: 'asset/resource',
            // },
            // {
            //     test: /\.(csv|tsv)$/i,
            //     use: ['csv-loader'],
            // },
            // {
            //     test: /\.xml$/i,
            //     use: ['xml-loader'],
            // },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
            // {
            //     test: /\.m?ts$/,
            //     exclude: /(node_modules|bower_components)/,
            //     use: {
            //         loader: 'babel-loader',
            //         options: {
            //             presets: ['@babel/preset-env', '@babel/preset-typescript'],
            //         },
            //     },
            // },
            // {
            //     test: /\.m?tsx$/,
            //     exclude: /(node_modules|bower_components)/,
            //     use: {
            //         loader: 'babel-loader',
            //         options: {
            //             presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
            //         },
            //     },
            // },
            // {
            //     test: /\.m?jsx$/,
            //     exclude: /(node_modules|bower_components)/,
            //     use: {
            //         loader: 'babel-loader',
            //         options: {
            //             presets: ['@babel/preset-env', '@babel/preset-react'],
            //         },
            //     },
            // },

        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/app.css',
            // chunkFilename: '[id].css',
            ignoreOrder: false,
            linkType: 'text/css',
        }),
        // new CopyPlugin({
        //     patterns: [
        //         {
        //             context: path.resolve(__dirname, "dist"),
        //             from: "./src/*.html",
        //         },
        //     ],
        // }),

        // new CopyPlugin({
        //     patterns: [
        //         {
        //             from: path.resolve(__dirname, "src", "assets"),
        //             to: path.resolve(__dirname, "dist", "assets"),
        //         },
        //     ],
        // }),
        new HtmlWebpackPlugin({
            // template: "src/[name].html",
            title: "Webpack Setup",
            filename: "index.html",
            template: "src/index.html",
        }),

        // new HtmlMinimizerPlugin({
        //     template: './src/*.html',
        //     // test: /\.html$/i,
        //     // exclude: /node_modules/,
        //     // include: /\/includes/,
        // })
    ],
    // optimization: {
    //     minimize: true,
    //     minimizer: [
    //         new HtmlMinimizerPlugin()
    //     ],
    // },
};
