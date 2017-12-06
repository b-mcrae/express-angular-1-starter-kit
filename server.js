var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var _ = require('underscore');
var users = require('./users.json');

var app = express();

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'assets', 'images', '/favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components', express.static(path.join(__dirname, '/bower_components')));
app.use('/assets', express.static(path.join(__dirname, '/assets')));
app.get('/', function(req, res) {
 res.sendfile('./public/index.html');
});

app.get('/users', function (req, res) {
  res.send(users);
});

app.get('/users/:id', function (req, res) {
  res.send(_.findWhere(users, { id: Number(req.params.id) }));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

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
