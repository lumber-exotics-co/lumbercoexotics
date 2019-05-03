const path = require('path');

module.exports = {
  entry: './client/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  devServer: {
    publicPath: '/build/',
    proxy: {
      '/api': 'http://localhost:3000/',
    },
    historyApiFallback: true,
    // contentBase: './'
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    },
    {test: /\.css$/, use: ['style-loader', 'css-loader']},
  ]
//     resolve: {
//     extensions: ['', '.js', '.jsx', '.css'],
//     modulesDirectories: [
//       'node_modules'
//     ]        
// }
  },
};