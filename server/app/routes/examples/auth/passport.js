/**
 ****** /server/app/routes/examples/index.js
 * Server Side Examples
 */

var config = require('../../../config');
var express = require('express');
var router = express.Router();
var passport = require('passport');


/***** COMMON MIDDLEWARES ***/

/* Define to which page redirect after successful login */
var afterLoginPage = function (req, res) {
    'use strict';
    res.redirect('/examples/auth/passport/page1');
};

/* Pages require login where this function is applied.
Will redirect to '/examples/auth/passport/badlogin' if persistent connection is not good. */
var ensureLogin = require('connect-ensure-login').ensureLoggedIn('badlogin');





/***** MAIN LOGIN FORM ***/

/* Login form with Local, Facebook, Twitter and G+ strategies
endpoint: GET /examples/auth/passport */
router.get('/', function (req, res) {
    'use strict';
    var vdata = {
        title: 'superMEAN examples - passportJS - Login Form',
        desc: 'Supermean example for passportJS. Login form with Local, Facebook, Twitter and G+ strategies.',
        keywords: 'supermean, mean stack, examples, Local, Facebook, Twitter',
        static_files: config.static_files
    };

    res.render('examples/auth/passport/index', vdata);
});





/***** LOCAL STRATEGY ***/

/* Receive username & password from login form and check authentication.
After successful authentication redirect to afterLoginPage.
endpoint: POST /examples/auth/passport/local/return */
router.post('/local/return', passport.authenticate('local', {

    failureRedirect: '/examples/auth/passport/badlogin',
    successRedirect: ''

}), afterLoginPage);





/***** FACEBOOK STRATEGY ***/

/* Open FB login form
endpoint: GET /examples/auth/passport/facebook */
router.get('/facebook', passport.authenticate('facebook'));


/* After successful FB authentication redirect to afterLoginPage.
endpoint: GET /examples/auth/passport/facebook/return */
router.get('/facebook/return', passport.authenticate('facebook'), afterLoginPage);





/***** PAGES ***/

/* Page 1
endpoint: GET /examples/auth/passport/page1 */
router.get('/page1', function (req, res, next) {
    'use strict';
    // console.log("req.cookies: ", req.cookies);
    // console.log("req.session: ", req.session); //req.session.passport.user
    // console.log("req.user: ", req.user);
    next();
}, ensureLogin, function (req, res) {
    'use strict';

    var vdata = {
        title: 'Supermean examples - passportJS local authentication',
        desc: 'Supermean example for passportJS.',
        keywords: 'supermean, mean stack, examples',
        static_files: config.static_files,
        user: req.user.displayName || req.user
    };

    res.render('examples/auth/passport/page1', vdata);
});


/* Page 2
endpoint: GET /examples/auth/passport/page2 */
router.get('/page2', ensureLogin, function (req, res) {
    'use strict';

    var vdata = {
        title: 'Supermean examples - passportJS local authentication',
        desc: 'Supermean example for passportJS.',
        keywords: 'supermean, mean stack, examples',
        static_files: config.static_files,
        user: req.user.displayName || req.user
    };

    res.render('examples/auth/passport/page2', vdata);
});


/* Page 3
endpoint: GET /examples/auth/passport/page3 */
router.get('/page3', ensureLogin, function (req, res) {
    'use strict';

    var vdata = {
        title: 'Supermean examples - passportJS local authentication',
        desc: 'Supermean example for passportJS.',
        keywords: 'supermean, mean stack, examples',
        static_files: config.static_files,
        user: req.user.displayName || req.user
    };

    res.render('examples/auth/passport/page3', vdata);
});


 /* Bad login page
 endpoint: GET /examples/auth/passport/badlogin */
router.get('/badlogin', function (req, res) {
    'use strict';

    var vdata = {
        title: 'Supermean examples - Bad Login',
        desc: 'Supermean example for passportJS. Bad Login page.',
        keywords: 'supermean, mean stack, examples',
        static_files: config.static_files
    };

    res.render('examples/auth/passport/badlogin', vdata);
});





/***** LOGOUT ***/

/* Log out
endpoint: GET /examples/auth/passport/logout */
router.get('/logout', function (req, res) {
    'use strict';
    req.logout();
    res.redirect('/examples/auth/passport');
});




module.exports = router;
