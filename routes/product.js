var express = require('express');
var router = express.Router();
// var app = require('../app');


router.get('/', function(req, res, next) {
  res.render('products');
});


module.exports = router;
