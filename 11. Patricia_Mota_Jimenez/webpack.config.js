const path = require('path');

module.exports = {
      entry: {
            app: './app.js'
      },
      output: {
            filename: '[name].main.js',
            path: path.resolve(__dirname, 'dist'),
      },
};