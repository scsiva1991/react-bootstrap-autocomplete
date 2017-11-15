const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const config = require('./webpack.config');
const host = process.env.NODE_HOST || 'localhost';
const port = process.env.NODE_PORT || 3000;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath
}).listen(port, host, function(error) {
  if (error) {
    console.error(error);
    process.exit(1);
  }

  const url = `http://${host}:${port}/demo/index.html`;

  console.log('Demo is ready at ' + url);
});
