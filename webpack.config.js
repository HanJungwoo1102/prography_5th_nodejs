const path = require("path");

module.exports = {
    entry : {
        main: './react_src/index.js'
    },
    output : {
        filename: 'bundle.js',
        path: path.resolve(__dirname + "/resource/js")
    },
    mode: 'none',
    module: {
        rules: [{
            test: /\.js$/,
            exclude: path.resolve(__dirname + "/node_modules"),
            use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
            }
            }
        }]
    }
}