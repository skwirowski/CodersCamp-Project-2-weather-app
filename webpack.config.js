var path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/javascript/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  }
};