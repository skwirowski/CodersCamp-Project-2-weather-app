// eslint-disable-next-line prefer-destructuring
const resolve = require('path').resolve;

module.exports = {
  mode: 'development',
  entry: './src/javascript/index.js',
  output: {
    path: resolve('dist'),
    filename: 'main.js',
    publicPath: '/dist/assets',
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
              [
                '@babel/plugin-transform-runtime',
                {
                  regenerator: true,
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.less$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'less-loader', // compiles Less to CSS
          },
        ],
      },
    ],
  },
  devServer: {
    port: 3000,
    open: true,
  },
};
