var express = require('express');
var router = express.Router();

console.log('users page');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { title: 'users' });
  // res.send('respond with a resource');
  res.send('123');
});

module.exports = router;
