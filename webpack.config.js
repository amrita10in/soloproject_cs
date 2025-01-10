const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const entry = [
  './client/index.js'
];

const output = {
  path: path.resolve(__dirname, 'dist'),
  publicPath: '/',
  filename: 'bundle.js',
};


module.exports = {
  mode: 'development',
  entry,
  output,
  devtool: "eval-source-map",

  module: {
    rules:[
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /.(css|scss)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    hot: true,
    historyApiFallback: true,
    static: {
      publicPath: '/',
      directory: path.resolve(__dirname, 'dist'),
    },
    headers: { 'Access-Control-Allow-Origin': '*' },
    proxy: {
      '/**': {
      target: 'http://localhost:3000',
      secure: false,
    },
   },
  },
  plugins: [
    new HtmlWebpackPlugin({
     title: 'Development',
     template: './client/index.html',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
