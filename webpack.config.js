const path = require('path')
const webpack = require('webpack')
const nodeExternals = require("webpack-node-externals")

const common = {
  rules: [
    {test: /\.(js)$/, user: 'babel-loader'}
  ]
}

const clientConfig = {
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, 'public')
  }
}