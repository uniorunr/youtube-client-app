const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['@babel/polyfill', './src/App.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    },
    {
      test: /\.(s*)css$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            data: '@import "src/theme.scss";',
            includePaths: [
              path.resolve(__dirname, 'src/App'),
            ],
          },
        },
      ],
    }],
  },
  plugins: [
    new HtmlPlugin({
      template: path.join(__dirname, '/src/index.html'),
      favicon: path.join(__dirname, '/src/favicon.png'),
    }),
  ],
  watch: true,
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
  },
};
