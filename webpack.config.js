const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: './dist',
        hot: true,
        open: true,
        compress: true,
    },
    mode: 'development',
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css',
            chunkFilename: '[id].css',
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
        // })

        new HtmlMinimizerPlugin({
            template: './src/*.html',
            test: /\.html$/i,
            exclude: /node_modules/,
            include: /\/includes/,
        })
    ],
    // optimization: {
    //     minimize: true,
    //     minimizer: [
    //         new HtmlMinimizerPlugin()
    //     ],
    // },
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
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
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
            //     test: /\.m?js$/,
            //     exclude: /(node_modules|bower_components)/,
            //     use: {
            //         loader: 'babel-loader',
            //         options: {
            //             presets: ['@babel/preset-env'],
            //         },
            //     },
            // },
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
};
