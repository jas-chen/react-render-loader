'use strict';

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/
      }
    ]
  }
};
