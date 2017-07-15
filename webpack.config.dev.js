const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const CLIENT_PATH = './client';
const CLIENT_DIST_PATH = './client/dist';
const SERVER_PATH = './server';

module.exports = {
  devtool: 'source-map',
  entry: [
    CLIENT_PATH+'/src/index.js'
  ],
  output: {
    path: __dirname+"/client/dist",
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  plugins: [
	new webpack.DefinePlugin({
		'process.env': {
		  'NODE_ENV': JSON.stringify('development')
		}
	}),
	new CopyWebpackPlugin([
        { from: CLIENT_PATH+'/style/css/*.css', to: 'style/bundle.css' },
        { from: CLIENT_PATH+'/index.html', to: 'index.html' },
        { from: CLIENT_PATH+'/game/assets', to: 'game/assets' },
        { from: CLIENT_PATH+'/game/framework/phaser', to: 'game/framework/phaser' }
	])
  ]

};
