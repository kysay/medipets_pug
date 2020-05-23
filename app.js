const createError = require('http-errors');

const express = require('express');
// 메일
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')


const path = require('path');
const cookieParser = require('cookie-parser');

const logger = require('morgan');
const sassMiddleware = require('node-sass-middleware');

// 라우터
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productRouter = require('./routes/product');

const app = express();

app.use('/node_modules', express.static(path.join(__dirname, '/node_modules')));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}));

app.use(express.static(path.join(__dirname, 'public')));

// 라우터
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productRouter);

// app.post('/result', (req, res, next) => {
//     res.render('result');
// });

// app.post('/send', (req, res) => {
//   console.log(req.body)
// })


app.post('/result', (req, res, next) => {
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
        // host: "smtp.ethereal.email",
        // port: 587,
        host: "localhost",
        port: 25,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'tlfldntm11@gmail.com', // generated ethereal user
            pass: 'realdydtlr11', // generated ethereal password
        },
        tls: {
            rejectUnauthorized:false
        }
    });

    // send mail with defined transport object
    let info = transporter.sendMail({
        from: 'tlfldntm11@gmail.com', // sender address
        to: "tlfldntm11@gmail.com", // list of receivers
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

    console.log("Finish sending email");
    // res.redirect("/");
    res.render('result', method='post');
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;