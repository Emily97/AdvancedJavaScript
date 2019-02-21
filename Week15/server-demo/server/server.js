const express = require('express');
const server = express();
const port = 3000;

var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/CA2', function (err, client) {
  if (err) throw err

  var db = client.db('CA2')

  db.collection('users').find().toArray(function (err, result) {
    if (err) throw err

    console.log(result)
  })
})

server.get('/', (req, res) => res.send('Hello World'));

server.get('/api/users', (req,res) => res.send({id:1, name:"John",age:40}));

server.listen(port, () => console.log(`Example app listening on port ${port}`));
