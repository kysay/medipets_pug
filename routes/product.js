var express = require('express');
var router = express.Router();
// var app = require('../app');


router.get('/', function(req, res, next) {
  res.render('products', {sub_img:'11', name: 'products'});
});


module.exports = router;
