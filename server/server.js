const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const userController = require('./controllers/userController');

const mongoURI = process.env.NODE_ENV === 'test' ? 'mongodb://localhost/solodb' : 'mongodb://localhost/solodb';
mongoose.connect(mongoURI);


const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '..', 'dist')));

app.get('/userInfo', userController.userInfo, (req, res) => {
  return res.status(200).json(res.locals.userData);
});

app.post('/signup', userController.createUser, (req, res) => {
  return res.status(200).redirect('/');
});

app.post('/', userController.verifyUser, (req, res) => {
  return res.status(200).redirect('/main');
})

app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});


// app.use('*', (req,res) => {
//   res.status(404).send('Not Found');
// });

/**
 * Global error handler
 */
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ error: err });
});

app.listen(PORT, ()=>{ console.log(`Listening on port ${PORT}...`); });

module.exports = app;

//manage session
//typescript implement
//implement redux if time permits

//ability to add picture
//ability to add multiple children

//modules based to current age range- milestones, top toys, sleep schedule, appointments

//drop down to display optional data for past or future ranges
//styling
//ability to add and delete appointment // authenticate with jot before display

