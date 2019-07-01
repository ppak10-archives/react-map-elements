/**
 * webpack.config.js
 * Webpack configuration for development environment
 */

// Node Modules
const PATH = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Plugins
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: PATH.join(__dirname, 'dev/index.html'),
  filename: './index.html',
});

// Constants
const PORT = 3001;

module.exports = {
  devServer: {
    port: PORT,
    historyApiFallback: true,
  },
  entry: ['@babel/polyfill', PATH.join(__dirname, 'dev')],
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader', // Creates style nodes from js strings
          },
          {
            loader: 'css-loader', // Translates css into commonjs
          },
          {
            loader: 'postcss-loader', // Run post css actions
            options: {
              plugins: () =>
                // post css plugins
                [require('precss'), require('autoprefixer')],
            },
          },
          {
            loader: 'less-loader', // Compiles scss code to css
          },
        ],
      },
    ],
  },
  plugins: [htmlWebpackPlugin],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
