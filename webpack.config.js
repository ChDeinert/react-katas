var path = require('path')
var webpack = require('webpack')

module.exports = {
  module: {
    rules: [{
      test: /\.css?$/,
      use: [{
        loader: 'style'
      }, {
        loader: 'raw'
      }]
    }]
  }
}
