const express = require('express');
const path = require('path');
require('dotenv').config();
const app = express();

// Setup the view template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Register any middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Register the routes
app.use('/', require('./routes/login'));
app.use('/register', require('./routes/register'));
app.use('/dashboard', require('./routes/dashboard'));
app.use('/forgot_password', require('./routes/forgot_password'));

// Start the server!
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening on port ${port}`));
