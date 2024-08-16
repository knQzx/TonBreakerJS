const path = require('path');
module.exports = {
  entry: './contract.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'runn',
    libraryTarget: 'window',
    libraryExport: 'default'
  },
};