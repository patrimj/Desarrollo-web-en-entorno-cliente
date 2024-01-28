const path = require('path');

module.exports = {
  entry: {
    app: './src/app.js',
    frases: './src/frases.js'
  },
  output: {
    filename: '[name].main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};