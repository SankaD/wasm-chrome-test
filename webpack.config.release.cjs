const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");


let configs = {
    entry: [
        'babel-regenerator-runtime',
        path.resolve(__dirname, "./index.js"),
    ],
    devtool: false,
    optimization: {
        minimize: true,
    },
    experiments: {
        asyncWebAssembly: true,
        topLevelAwait: true,
        syncWebAssembly: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    "source-map-loader",
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"],
                            sourceMaps: true
                        }
                    }
                ],
                exclude: /(node_modules)/
            },
            {
                test: /\.mjs$/,
                include: /node_modules/,
                type: "javascript/auto"
            },
            {
                test: /\.wasm$/,
                type: "asset/inline",
            },
        ],
        parser: {
            javascript: {
                dynamicImportMode: 'eager'
            }
        }
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.wasm', ".mjs", '...'],
        fallback: {
            "buffer": require.resolve("buffer"),
            "path": require.resolve("path-browserify"),
            "fs": false,
        }
    },
    mode: "production",
    plugins: [
        new WasmPackPlugin({
            crateDirectory: path.resolve(__dirname, '.'),
            outDir: "./pkg/",
            extraArgs: '--target web --release',
        })
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        library: {
            type: "commonjs2"
        },
    },
    target: "web",

};

module.exports = configs;
