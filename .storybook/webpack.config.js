const path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.sass$/,
        loaders: [ 'style', 'css-loader', 'sass-loader' ],
        include: path.resolve(__dirname, '../')
      }
    ]
  }
}
