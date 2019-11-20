/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
let path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/javascript/app.js',
  output: {
    filename: './dist/main.js',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              '@babel/plugin-proposal-object-rest-spread',
              ['@babel/plugin-transform-runtime',
                {
                  regenerator: true,
                },
              ],
            ],
          },
        },
      },
    ],
  },
  devServer: {
    port: 3000,
    open: true,
  },
};
