//Load express
const express = require('express');
const path = require('path');

// artist database
const artistDb = require('./data/artist-db');

//create the express app
const app = express();

// Configure the app (app.set)
app.set('view engine', 'twig');
app.set('views', path.join(__dirname, 'views'));

// Mount middleware (app.use)

// Mount Routes
app.get('/', function(req, res) {
  res.redirect('/home');
});

app.get('/home', function(req, res) {
  res.render('home');
});

app.get('/artists', function(req, res) {
  res.render('artists/index', {
    artists: artistDb.getAll()
  });
});

app.get('/artists/:id', function(req, res) {
  console.log(`The value for the :id rout parameter is: ${req.params.id}`);
  res.render('artists/show', {
    artist: artistDb.getOne(req.params.id),
    todoNum: parseInt(req.params.id) + 1
  });
});

//Tell the app to list on port 3000
app.listen(4000, () => {
  console.log(`Server started on port 4000`);
});
