const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const Chef = require('./models/Chef');
const Recipe = require('./models/Recipe');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const mongo_uri = 'mongodb://localhost/chef-recipes';
mongoose.connect(mongo_uri, { useNewUrlParser: true }, function(err) {
  if (err) {
    throw err;
  } else {
    console.log(`Successfully connected to ${mongo_uri}`);
  }
});

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.get('/api/chefs', function(req, res) {
  Chef.find({}, function(err, data) {
    if (err) throw err;

    res.send(data);
  });
});

app.get('/api/recipes', function(req, res) {
  Recipe.find({}, function(err, data) {
    if (err) throw err;

    res.send(data);
  });
});

app.get('/api/chefs/:id', function(req, res) {
  Chef.findOne({_id: req.params.id}, function(err, data) {
    if (err) throw err;

    res.send(data);
  });
});

app.get('/api/chefs/:id/recipes', function(req, res) {
  Chef.findOne({_id: req.params.id}, function(err, data) {
    if (err) throw err;

    Recipe.find({chef_id: data._id}, function(err, recipes) {
      if (err) throw err;

      res.send(recipes);
    });
  });
});


app.listen(process.env.PORT || 8080);
