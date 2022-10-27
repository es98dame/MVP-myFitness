// app, controllers, model
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const db = require('../database');
const controller = require('./controllers.js');

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// ------------------------------------Routes API URL
// get daily notes
app.get('/getdailynotes', (req, res) => {
  // pass req.query to controller
  controller.getDailynotes(req, res);
});

app.post('/postdailynotes', (req, res) => {
  // pass req.query to controller
  controller.postDailynotes(req, res);
});


app.get('/getfoodlog', (req, res) => {
  // pass req.query to controller
  controller.getfoodlog(req, res);
});


app.post('/postfoodlog', (req, res) => {
  // pass req.query to controller
  controller.postfoodlog(req, res);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = { app };