/// <binding ProjectOpened='Watch - Development' />
var webpack = require("webpack");
var wwwroot = __dirname + "/wwwroot";

module.exports = {
    cache: true,
    entry: {
        "bundle": [wwwroot + "/app/bundle.ts"],
        "bundle-vendors": [wwwroot + "/app/bundle-vendors.ts"],
    },
    output: {
        path: wwwroot + "/js",
        filename: "[name].js",
        sourceMapFilename: "[name].map"
    },
    resolve: {
        extensions: [".ts", ".js", ".html"]
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: [
                    "awesome-typescript-loader",
                    "angular2-template-loader"
                ],
                exclude: /(node_modules)/
            },
            {
                test: /\.html$/,
                loader: "raw-loader"
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: "bundle-vendors"
        })
    ]
}