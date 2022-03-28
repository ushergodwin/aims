var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/test', function(req, res, next) {
  res.status(200).send({ response: 'Damn,the REST API works!' });
});

module.exports = router;
