module.exports = {
  entry: ['babel-polyfill', './src/public/js/main.js'],
  output: {
    path: __dirname,
    filename: './src/public/js/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  }
}
