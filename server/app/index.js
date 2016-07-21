/**
 * ************** /server/app/index.js
 * Main application file
 * - set view engine
 * - middlewares
 * - routing
 */

var config = require('./config');
var express = require('express');
var app = express();
var path = require('path');





//***** VIEW ENGINE *****
//***********************
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');






//***** MIDDLEWARES *****
//***********************
require('./middlewares/logger_morgan.js')(app, config); //must be first to log each request (also static files)
require('./middlewares/debug.js')(app, config);
require('./middlewares/errors.js')(app, config);
require('./middlewares/favicon.js')(app);
// require('./middlewares/cookieParser.js')(app);
require('./middlewares/bodyParser.js')(app);
require('./middlewares/connect_flash.js')(app);

//database middlewares
if (config.env.database.mongodb.isActive) {
    require('./middlewares/database/' + config.env.database.mongodb.driver + '.js')(config);
}

// require('./middlewares/virtual_host.js')(app, config);

//*** static file middlewares --- path.join() creates absolute path from root
app.use('/assets', express.static(path.join(__dirname, '/assets')));
app.use('/bower', express.static(path.join(__dirname, '/../../bower_components')));
app.use('/client', express.static(path.join(__dirname, '/../../client')));

//*** auth middlewares
require('./middlewares/auth/passport.js')(app); //passport common middleware
require('./middlewares/auth/passport_local.js')();
require('./middlewares/auth/passport_facebook.js')();
require('./middlewares/auth/passport_twitter.js')();
require('./middlewares/auth/passport_google.js')();
// require('./middlewares/auth/express-session.js')(app);






//****** SERVER SIDE ROUTES *****
//*******************************
app.use('/', require('./routes/index.js'));

//*** server-side examples
app.use('/examples', require('./routes/examples/index.js'));
// app.use('/examples/auth/passport', require('./middlewares/nodedump_req.js'), require('./routes/examples/auth/passport.js')); //with nodedump debuggung
app.use('/examples/auth/passport', require('./routes/examples/auth/passport.js'));
app.use('/examples/bluebird', require('./routes/examples/bluebird/index.js'));
app.use('/examples/mongoose', require('./routes/examples/mongoose/index.js'));








//****** CLIENT SIDE ROUTES *****
//*******************************
/**
 * When URL is typed in browser superMEAN first trying to find route on server-side e.g. inside /server/routes/.
 * If route is not found on server-side, superMEAN is trying to find route on client side e.g. inside /client/src/config/routes.js .
 * Client side URLs doesn't use hasbang (#!) because the Angular is working in HTML5 mode.
 * Finally, if route is not found in client-side superMeAN redirects to /server/views/_errors/error404.ejs page.
 */
app.use(function (req, res) {
    'use strict';
    res.render('clientApp');
});


module.exports = app;
