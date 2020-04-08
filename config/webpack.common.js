const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  plugins: [
    new FaviconsWebpackPlugin({
      logo: './src/assets/images/favicon-32x32.png',
      cache: true,
      inject: true,
      icons: {
        coast: false,
        yandex: false
      }
    })
  ],
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