/**
 * Index/main route 
 */
var express = require('express');
var router = express.Router();

/**
 * GET Home route
 * @param {Object} req - The express request object
 * @param {Object} res - The express response object
 * @param {Object} next - The next middleware in the middleware chain
 */
router.get('/', function(req, res, next) {
  res.render('home');
});

module.exports = router;
