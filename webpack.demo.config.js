const webpack = require('webpack');
const path = require('path');
const host = process.env.NODE_HOST || 'localhost';
const port = process.env.NODE_PORT || 3000;

module.exports = {
    entry: [
        `webpack-dev-server/client?http://${host}:${port}`,
        './demo/src/index'
    ],
    output: {
        path: path.join(__dirname, 'demo/dist'), // Must be an absolute path
        filename: 'demo.js',
        publicPath: '/demo/dist'
    },
    module: {
      loaders: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          "presets": ["react", "es2015", 'stage-0']
        }
      }, {
        test: /\.json?$/,
        loader: 'json'
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }, {
        test: /\.(ttf|eot|svg|png|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader',
      }]
    }
}
