const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    // Conditions:
    test: /\.jsx?$/,
    include: [
      path.resolve(__dirname, 'src')
    ],
};