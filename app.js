/**
 * Allow Node.js to require and load `.marko` files
 */
require('marko/node-require')
const express = require('express');
const createError = require('http-errors');
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
const apiRouter = require('./routes/api');

/**
 * Lassojs Configuration
 */
lasso.configure(require('./config/lasso'));

/**
 * The Express Application instance
 */
const app = express();

/**
 * disable x-powered-by to deceive hackers
 */
app.disable('x-powered-by');
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
log.info('Application middlewares initialized');

/**
 * Set the app to use the routes
 */
app.use('/', indexRouter);
app.use('/api', apiRouter);
log.info('Application routes initialized');

/**
 * catch 404 and forward to error handler
 * @param {Object} req - The express request object
 * @param {Object} res - The express response object
 * @param {Object} next - The next middleware in the middleware chain
 */
app.use(function (req, res, next) {
  next(createError(404));
});

/**
 * error handler
 * @param {Object} err - The error object
 * @param {Object} req - The express request object
 * @param {Object} res - The express response object
 * @param {Object} next - The next middleware in the middleware chain
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