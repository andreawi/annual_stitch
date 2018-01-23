const path = require('path');
 
module.exports = {
  context: path.join(annual_stitch, 'src'),
  entry: [
    './main.js',
  ],
  output: {
    path: path.join(annual_stitch, 'www'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
};