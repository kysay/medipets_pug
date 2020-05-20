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

router.POST('/send', (req, res, next) => {
    console.log(req.body);
    const output =
        `<ul>
            <li>name : ${req.body.name} </li>
            <li>phone : ${req.body.phone} </li>
            <li>mail : ${req.body.mail} </li>
            <li>type : ${req.body.type} </li>
            <li>content : ${req.body.content} </li>
        </ul>
        `;

// create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        // host: "kysay.com",
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'tlfldntm12@gmail.com', // generated ethereal user
            pass: 'dydtlr11', // generated ethereal password
        },
        tls: {
            rejectUnauthorized:false
        }
    });

    // send mail with defined transport object
    let info = transporter.sendMail({
        from: 'tlfldntm12@gmail.com', // sender address
        to: "tlfldntm12@gmail.com", // list of receivers
        subject: "문의가 왔습니다.", // Subject line
        text: "Hello world?", // plain text body
        html: output, // html body
    });

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            //에러
            console.log(error);
        }
        //전송 완료
        console.log("Finish sending email : " + info.response);
        transporter.close()
    })

    res.redirect("/");
})

router.get('/bbs', function (req, res, next) {
    res.render('bbs');
});

module.exports = router;
