/*jslint unparam: true, node: true*/

require('rootpath')(); //root path for require()
var express = require('express');
var app = express();
var path = require('path');

// $DEBUG=server:app node server
var debug = require('debug')('server:app');
var chalk = require('chalk');
debug(chalk.yellow(__dirname));


// VIEWS - view engine setup
var ejs = require('ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// CONTROLLERS - routing with express-enrouten (https://github.com/krakenjs/express-enrouten)
// var router = express.Router();
var enrouten = require('express-enrouten');
app.use(enrouten({
    index: 'controllers/index.js',
    directory: 'controllers',
    routes: [
      // { path: '/nest', method: 'GET', handler: require('./controllers/index') },
      // { path: '/admin', method: 'GET', handler: require('./routes/admin'), middleware: [isAuthenticated] }
    ]
    // middleware: [middleware1, middleware2, ...etc]
}));


//static files
app.use('/assets', express.static(path.join(__dirname, '/../assets')));
app.use('/bower', express.static(path.join(__dirname, '/../../bower_components')));
app.use('/client', express.static(path.join(__dirname, '/../../client')));


// uncomment after placing your favicon
var favicon = require('serve-favicon');
app.use(favicon(path.join(__dirname + '/../assets/img/favicon.png')));


//other app midelwares
require('server/app/config/middleware/index.js')(app);


// if doesn't find any route on server side e.g. in /server/app/controllers/ 
// then render client side one page app e.g. angular app /server/views/clientApp.ejs
app.use(function (req, res, next) {
    res.render('clientApp');
});


// development error handler
// will print stacktrace
if (app.get('env') === 'dev') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

//show all requests in console
app.use();

module.exports = app;
