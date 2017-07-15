const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

const app = express();

// Port Number
const port = process.env.PORT || 8081;

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Connect To Database
mongoose.Promise = global.Promise;
mongoose.connect(config.database, { useMongoClient: true })
    .then(() => console.log(`Database connected! `))
    .catch(err => console.log(`Database connection error: ${err.message}`));

// CORS Middleware
app.use(cors());

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

// User Route
const users = require('./routes/users');
app.use('/users', users);

// Index Route
app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start Server
app.listen(port, () => {
  console.log('Server started on port '+port);
});
