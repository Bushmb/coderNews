// *** main dependencies *** //
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var swig = require('swig');
var passport = require('passport');
var session = require('express-session');
var mongoose = require('mongoose');

// *** routes *** //
var routes = require('./routes/index');
var scheduleData = require('./grabData/scheduleData');
var dashboard = require('./routes/dashboard');
var hacker = require('./routes/hacker');

mongoose.Promise = global.Promise;

//test //

// *** express instance *** //
var app = express();

// *** mongoose *** //
mongoose.connect('mongodb://localhost/codernews');

// *** view engine *** //
var swig = new swig.Swig();
app.engine('html', swig.renderFile);
app.set('view engine', 'html');


// *** static directory *** //
app.set('views', path.join(__dirname, 'views'));


// *** config middleware *** //
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// // Express only serves static assets in production
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('client2/build'));
// }

app.use(express.static(path.join(__dirname, '../client/public')));
app.use(session({
  secret: 'shhhhhh',
  resave: true,
  saveUninitialized: true
}));


app.use(passport.initialize());
app.use(passport.session());

// *** main routes *** //

app.use('/dashboard', isLoggedIn, dashboard);

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.use('/hacker', hacker);
app.use('/', routes);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// *** error handlers *** //

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;

(function() {
  scheduleData.init();
})();


function isLoggedIn(req, res, next) {
  console.log("middleware hit")
  if (req.isAuthenticated())
      return next();
  res.redirect('/');
}
