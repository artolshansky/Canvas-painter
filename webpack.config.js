const path = require('path');

module.exports = {
  entry: './src/index',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    loaders: [{
      test: /\.js$/,
      include: [ path.resolve(__dirname, "src") ],
      loader: "babel-loader",
      query: {
        plugins: ['transform-es2015-modules-commonjs'],
        presets: ['es2015']
      }
    }]
  }
};
