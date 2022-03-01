const path = require('path');

module.exports = {
    entry: './src/index.js',
    devtool: 'inline-source-map',
    mode: 'development',
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader'
            ],
          },
        ],
      },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};