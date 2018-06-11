/**
 * API Route
 */
var express = require('express');
var router = express.Router();

/**
 * GET users listing
 * @param {Object} req - The express request object
 * @param {Object} res - The express response object
 * @param {Object} next - The next middleware in the middleware chain
 */
router.get('/', function(req, res, next) {
  let data = {
    status: 'Api route init'
  };
  res.json(data);
});

module.exports = router;
