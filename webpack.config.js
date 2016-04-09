var path = require('path');

module.export = {
  context:__dirname,
  entry: path.join(__dirname, 'public','entry.js'),
  output: {
    path? path.join(__dirname,'dist'),
    filename: 'bundle.js'
  }
