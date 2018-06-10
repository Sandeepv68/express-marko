const express = require('express');
const router = express.Router();

/**
 * Middleware to augment the response object with helpers
 */
router.use(require('./response'));
router.use(require('./error'));

module.exports = router;