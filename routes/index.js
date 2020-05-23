var express = require('express');
var router = express.Router();


/* GET home page. */
// router.get('/index', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get('/', function (req, res, next) {
    res.render('index');
});
router.get('/about', function (req, res, next) {
    res.render('about');
});
router.get('/process', function (req, res, next) {
    res.render('process');
});
router.get('/contact_us', function (req, res, next) {
    res.render('contact_us');
});
router.get('/privacy-policy', function (req, res, next) {
    res.render('privacy-policy');
});
router.get('/services', function (req, res, next) {
    res.render('services');
});
router.get('/send_mail', function (req, res, next) {
    res.render('send_mail');
});

// app.post('/result', (req, res, next) => {
// });


router.get('/bbs', function (req, res, next) {
    res.render('bbs');
});

module.exports = router;
