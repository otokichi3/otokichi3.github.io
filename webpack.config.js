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
};
