const Recipe = require('../models/Recipe.js');
const mongoose = require('mongoose');

const RecipeSchema = mongoose.Schema({
  name: String,
  time: Number,
  level: String,
  chef_id : { type: mongoose.Schema.Types.ObjectId, ref: 'Chef' }
});

Recipe.exports = mongoose.model('Recipe', RecipeSchema);
