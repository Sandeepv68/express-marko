/**
 * Allow Node.js to require and load `.marko` files
 */
require('marko/node-require')
const createError = require('http-errors');
const express = require('express');
const markoExpress = require('marko/express');
const compression = require('compression');
const lasso = require('lasso');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

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

/**
 * Allow morgan to log the app to console
 */
app.use(logger('dev'));
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

/**
 * catch 404 and forward to error handler
 */
app.use(function (req, res, next) {
  next(createError(404));
});

/**
 * error handler
 */
app.use(function (err, req, res, next) {
  /**
   * set locals, only providing error in development
   */
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  let errorData = {
    status: err.status || 500,
    message: err.message,
    stack: err.stack
  };
  /**
   * render the error page
   */
  res.status(err.status || 500);
  res.render('error', errorData);
});

module.exports = app;