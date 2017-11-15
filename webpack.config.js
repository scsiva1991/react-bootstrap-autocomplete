const webpack       = require('webpack');
const path          = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: {
        index: './src/index'
    },
    output:  {
        path:          path.join(__dirname, 'dist'),
        filename:      '[name].js',
        libraryTarget: 'commonjs2'
    },
    externals: [nodeExternals()],
    plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            'NODE_ENV': JSON.stringify('development')
          }
        })
    ],
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
