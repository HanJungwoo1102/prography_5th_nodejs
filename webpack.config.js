const path = require("path");

module.exports = {
    entry : {
        app: [path.resolve(__dirname + "/react_src/index.js")]    
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
                    presets: [
                        ['@babel/preset-env', {
                          "targets": {"esmodules": true}, /* chrome 55 이상으로 지정 */
                          "debug": true
                        }], // preset-env 에 대한 설정을 적용 하고 싶을 때에
                        '@babel/preset-react'
                      ],
                }
            }
        }]
    }
}