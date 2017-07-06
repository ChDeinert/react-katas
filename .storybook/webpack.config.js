const path = require('path');

module.exports = {
  module: {
    rules: [{
      test: /\.sass$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }, {
        loader: 'sass-loader'
      }],
      include: path.resolve(__dirname, '../')
    }]
  }
}
