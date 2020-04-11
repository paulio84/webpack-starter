const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'assets/images'
          }
        }
      },

    ]
  }
}
