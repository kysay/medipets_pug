var express = require('express');
var router = express.Router();
// var app = require('../app');


console.log('users page');
/* GET users listing. */

router.get('/', function(req, res, next) {
  res.render('users', { title: 'users' });
  // res.send('respond with a resource');
  // res.send('index');
});

router.get('/edit', function(req, res, next) {
  res.render('users', { title: 'edit' });
  // res.send('respond with a resource');
  // res.send('???');
});

module.exports = router;
