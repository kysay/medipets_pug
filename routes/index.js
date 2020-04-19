var express = require('express');
var router = express.Router();


/* GET home page. */
// router.get('/index', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/about', function(req, res, next) {
  res.render('about');
});
router.get('/process', function(req, res, next) {
  res.render('process');
});
router.get('/contact_us', function(req, res, next) {
  res.render('contact_us');
});

module.exports = router;
