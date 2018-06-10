var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let data = {
    status: 'Api route init'
  };
  res.json(data);
});

module.exports = router;
