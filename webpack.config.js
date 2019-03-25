module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: __dirname
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue'],
        modules: [
            "node_modules"
        ],
        alias: {
            // vue.js のビルドを指定する
            vue: 'vue/dist/vue.common.js'
        }
    },
};
