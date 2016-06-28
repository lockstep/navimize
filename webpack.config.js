const path = require('path');
const webpack = require('webpack');

var config = module.exports = {
  // the base path which will be used to resolve entry
  context: __dirname,

  // the main entry point for our application's frontend JS
  entry: './ui/entry.jsx',

  output: {
    // this is our app/assets/javascripts directory, which is part of the Sprockets pipeline
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),

    // the filename of the compiled bundle, e.g. app/assets/javascripts/bundle.js
    filename: 'app_bundle.js',

    // if the webpack code-splitting feature is enabled, this is the path it'll use to download bundles
    publicPath: '/assets',
  },

  resolve: {
    // tell webpack which extensions to auto search when it resolves modules. With this,
    // you'll be able to do `require('./utils')` instead of `require('./utils.js')`
    extensions: ['', '.js', '.jsx'],

    // search in node_modules and vendor/assets/components
    modulesDirectories: ['node_modules', 'vendor/assets/components/'],
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/, // any files end with .js or .jsx
        exclude: /node_modules/,
        loader: 'babel',
        query: { presets: ['es2015', 'react'] }
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  }
}
