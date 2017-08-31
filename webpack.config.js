const path = require('path');

module.exports = {
  entry: './index',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build')
  }
};
