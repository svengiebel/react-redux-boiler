// I added this to the top of my `webpack.config.js`
if (global.Promise == null) {
    global.Promise = require('es6-promise')
}

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel'
      },
      // SASS
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }
  ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
