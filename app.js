
/**
 * Module dependencies
 */

var express = require('express'),
  bodyParser = require('body-parser'),
  cookieParser = require('cookie-parser'),
  methodOverride = require('method-override'),
  errorHandler = require('express-error-handler'),
  morgan = require('morgan'),
  router = require('./router'),
  http = require('http'),
  path = require('path');

var app = module.exports = express();
/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'html');
app.use(morgan('dev'));
app.use(bodyParser());
app.use(cookieParser());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
var env = process.env.NODE_ENV || 'development';

// development only
if (env === 'development') {
  app.use(errorHandler());
}

// production only
if (env === 'production') {
  // TODO
}


/**
 * Routes
 */

// redirect all others to the index (HTML5 history)
app.use('*', router);


/**
 * Start Server
 */

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
