const webpack = require('webpack')

const PORT = 1234
const excludes = /node_modules/

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:1234',
    __dirname + '/src/entry.js'
  ],
  output: {
    path: __dirname + '/dist/',
    filename: 'entry.js'
  },
  devtool: 'eval',
  debug: true,
}
