/**
 * Allow Node.js to require and load `.marko` files
 */
require('marko/node-require')
const express = require('express');
const markoExpress = require('marko/express');
const compression = require('compression');
const lasso = require('lasso');
const path = require('path');
const cookieParser = require('cookie-parser');
const log = require('pino')(require('./config/pino'));

/**
 * Set up global logging
 */
global.log = log;

/**
 * Set up the routes
 */
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

/**
 * Lassojs Configuration
 */
lasso.configure(require('./config/lasso'));

/**
 * The Express Application instance
 */
const app = express();

/**
 * enable res.marko(template, data)
 */
app.use(markoExpress());

/**
 * Enable gzip compression for all HTTP responses
 */
app.use(compression());

/**
 * Allow all of the generated files under "static" to be served up by Express
 */
app.use(require('lasso/middleware').serveStatic());

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Custom Middleware
 */
app.use(require('./middlewares'));

/**
 * Set the app to use the routes
 */
app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;