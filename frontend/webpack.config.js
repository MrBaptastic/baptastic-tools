var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
var release = false;

module.exports = {
    entry: './index.jsx',
    output: {
        filename: 'bundle.js', //this is the default name, so you can skip it
        //at this directory our bundle file will be available
        //make sure port 8090 is used when launching webpack-dev-server
        publicPath: 'http://localhost:8090/assets'
    },
    plugins: [
        new ExtractTextPlugin("styles.css")
    ],
    module: {
        loaders: [
            { test: /\.js$/,    loader: 'babel-loader', exclude: /node_modules/, },
            { test: /\.jsx$/,   loader: 'jsx-loader?insertPragma=React.DOM&harmony' },
            { test: /\.rt/,     loader: 'react-templates-loader' },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract(
              "css?" + (release ? "minimize" : "sourceMap") + "!" +
              "sass?" + (release ? "" : "sourceMap") + "&includePaths[]=" + path.join(__dirname, 'node_modules/foundation-sites/scss/'))
            },
        ]
    },
    externals: {
        //don't bundle the 'react' npm package with our bundle.js
        //but get it from a global 'React' variable
        'react': 'React'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.rt'],
        moduleDirectories: [ "./", "node_modules" ]
    }
}