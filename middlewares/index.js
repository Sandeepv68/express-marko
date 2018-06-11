/**
 * Custom middlewares can be augmented here
 */
const express = require('express');
const router = express.Router();

/**
 * Middleware to augment the response object with helpers
 */
router.use(require('./response'));

module.exports = router;