const createError = require('http-errors');

const express = require('express');
// 메일
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
// const nodemailer = require('nodemailer')


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

// app.post('/send', (req, res) => {
//   console.log(req.body)
// })

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