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
    res.render('about', { name:'about' });
});
router.get('/process', function (req, res, next) {
    res.render('process', { name:'process' });
});
router.get('/contact_us', function (req, res, next) {
    res.render('contact_us', { name:'contact_us' });
});
router.get('/privacy-policy', function (req, res, next) {
    res.render('privacy-policy', { name:'개인정보처리방침' });
});
router.get('/services', function (req, res, next) {
    res.render('services', { name:'이용약관' });
});
router.get('/send_mail', function (req, res, next) {
    res.render('send_mail', { name:'문의하기' });
});

// app.post('/result', (req, res, next) => {
// });


router.get('/bbs', function (req, res, next) {
    res.render('bbs', { name:'게시판' });
});

module.exports = router;
