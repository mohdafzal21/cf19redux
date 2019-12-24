const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/cof19moviesapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports.MOVIESLIST = require('./moviesList.js')