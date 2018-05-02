const path    = require("path");
const webpack = require('webpack');  // To access built-in plugins

// http://marcobotto.com/compiling-and-bundling-typescript-libraries-with-webpack/

// `CheckerPlugin` is optional. Use it if you want async error reporting.
// We need this plugin to detect a `--watch` mode. It may be removed later
// after https://github.com/webpack/webpack/issues/3460 will be resolved.
const {CheckerPlugin} = require('awesome-typescript-loader')

module.exports = {
    entry:   path.join(__dirname, "src", "browser", "mylib-browser.ts"),
    output:  {
        filename:       "mylib-browser.js",
        path:           path.join(__dirname, "dist", "browser"),
        libraryTarget:  "umd",
        library:        "mylib",
        umdNamedDefine: true
    },
    devtool: "source-map",
    module:  {
        rules: [
            // {
            //     test:    /\.tsx?$/,
            //     loader:  "awesome-typescript-loader",
            //     exclude: /node_modules/,
            //     query:   {declaration: true}
            // }
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new CheckerPlugin(),
        // TODO: The following has been removed.  Use config.optimization.minimize instead.
        // new webpack.optimize.UglifyJsPlugin({
        //     minimize:  true,
        //     sourceMap: true,
        //     include:   /\.min\.js$/,
        // })
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    }
};
