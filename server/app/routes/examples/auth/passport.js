/**
 ****** /server/app/routes/examples/auth/passport.js
 * PassportJS examples with Local, Facebook, Twitter and G+ Strategies
 */

var config = require('../../../config');
var express = require('express');
var router = express.Router();
var passport = require('passport');
var chalk = require('chalk');

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

    successRedirect: '',
    failureRedirect: '/examples/auth/passport/badlogin',
    failureFlash: true

}), afterLoginPage);





/***** FACEBOOK STRATEGY ***/

/* Open FB login form
endpoint: GET /examples/auth/passport/facebook */
router.get('/facebook', passport.authenticate('facebook'));


/* After successful FB authentication redirect to afterLoginPage.
endpoint: GET /examples/auth/passport/facebook/return */
router.get('/facebook/return', passport.authenticate('facebook', {

    successRedirect: '',
    failureRedirect: '/examples/auth/passport/badlogin',
    failureFlash: true

}), afterLoginPage);





/***** TWITTER STRATEGY ***/

/* Open TW login form
endpoint: GET /examples/auth/passport/twitter */
router.get('/twitter', passport.authenticate('twitter'));


/* After successful TW authentication redirect to afterLoginPage.
endpoint: GET /examples/auth/passport/twitter/return */
router.get('/twitter/return', passport.authenticate('twitter', {

    successRedirect: '',
    failureRedirect: '/examples/auth/passport/badlogin',
    failureFlash: true

}), afterLoginPage);





/***** GOOGLE+ STRATEGY ***/

/* Open G+ login form
endpoint: GET /examples/auth/passport/google */
router.get('/google', passport.authenticate('google', {
    scope: [
        'https://www.googleapis.com/auth/plus.login',
        'https://www.googleapis.com/auth/plus.profile.emails.read'
    ]
}));


/* After successful G+ authentication redirect to afterLoginPage.
endpoint: GET /examples/auth/passport/google/return */
router.get('/google/return', passport.authenticate('google', {

    successRedirect: '',
    failureRedirect: '/examples/auth/passport/badlogin',
    failureFlash: true

}), afterLoginPage);




/***** PAGES ***/

/* Page 1
endpoint: GET /examples/auth/passport/page1 */
router.get('/page1', function (req, res, next) {
    'use strict';
    console.log(chalk.green("req.sessionID: ", req.sessionID));
    console.log(chalk.green("req.session: ", JSON.stringify(req.session, null, 2))); //req.session.passport.user
    console.log(chalk.green("req.user: ", req.user));
    next();
}, ensureLogin, function (req, res) {
    'use strict';

    var vdata = {
        title: 'Supermean examples - passportJS local authentication',
        desc: 'Supermean example for passportJS.',
        keywords: 'supermean, mean stack, examples',
        static_files: config.static_files,
        user: req.user.displayName || req.user,
        user_img: (req.user.photos && req.user.photos[0].value) || ''
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
        user: req.user.displayName || req.user,
        user_img: (req.user.photos && req.user.photos[0].value) || ''
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
        user: req.user.displayName || req.user,
        user_img: (req.user.photos && req.user.photos[0].value) || ''
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
        static_files: config.static_files,
        errMsg: req.flash('error')
    };

    res.render('examples/auth/passport/badlogin', vdata);

    //remove session and delete session file on FileStore
    setTimeout(function () {
        req.session.destroy();
    }, 1300);
});





/***** LOGOUT ***/

/* Log out
endpoint: GET /examples/auth/passport/logout */
router.get('/logout', function (req, res) {
    'use strict';
    req.session.destroy(); //remove session and delete session file on FileStore
    req.logout();
    res.redirect('/examples/auth/passport');
});




module.exports = router;
