const mongoose = require('mongoose');
const Chef = require('./models/Chef');
const Recipe = require('./models/Recipe');

const mongo_uri = 'mongodb://localhost/chef-recipes';
mongoose.connect(mongo_uri, { useNewUrlParser: true }, function(err) {
  if (err) {
    throw err;
  } else {
    console.log(`Successfully connected to ${mongo_uri}`);
  }
});

Chef.findOne({name: 'Eoghan Yudkin'}, function(err, chef) {
  if (err) throw err;

  let arr = [
    {name: 'Maths 101',
      credits: 10,
      weeks: 15,
      chef_id : chef._id},
    {name: 'Maths 202',
      credits: 10,
      weeks: 15,
      chef_id : chef._id},
    {name: 'Stats all folks',
      credits: 10,
      weeks: 15,
      chef_id : chef._id}
  ];
  Recipe.create(arr, function(err, res) {
    if(err) throw err;

    console.log(res);
  });
});
