const mongoose = require('mongoose');

const ChefSchema = mongoose.Schema({
  name: String,
  image: String,
  email: String,
  region: String
});

module.exports = mongoose.model('Chef', ChefSchema);
