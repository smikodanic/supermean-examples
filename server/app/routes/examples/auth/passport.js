/**
 ****** /server/app/routes/examples/index.js
 * Server Side Examples
 */

var config = require('../../../config');
var express = require('express');
var router = express.Router();
var passport = require('passport');

//will redirect to /xamples/passport/badlogin if persistent connection is not good
var ensureLogin = require('connect-ensure-login').ensureLoggedIn('../badlogin');


/* endpoint: GET /examples/auth/passport */
router.get('/', function (req, res) {
    'use strict';
    var vdata = {
        title: 'superMEAN examples - passportJS',
        desc: 'Supermean example for passportJS.',
        keywords: 'supermean, mean stack, examples',
        static_files: config.static_files
    };

    res.render('examples/auth/passport/index', vdata);
});



/* endpoint: POST /examples/auth/passport/local/page1 */
router.post('/local/page1', passport.authenticate('local', {failureRedirect: '/examples/auth/passport/badlogin', successRedirect: ''}), function (req, res) {
    'use strict';
    // console.log("req.cookies: ", req.cookies);
    // console.log("req.session: ", req.session); //req.session.passport.user
    // console.log("req.user: ", req.user);
    var vdata = {
        title: 'Supermean examples - passportJS local authentication',
        desc: 'Supermean example for passportJS.',
        keywords: 'supermean, mean stack, examples',
        static_files: config.static_files
    };

    res.render('examples/auth/passport/page1', vdata);
});


/* endpoint: GET /examples/auth/passport/local/page1 */
router.get('/local/page1', function (req, res, next) {
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
        static_files: config.static_files
    };

    res.render('examples/auth/passport/page1', vdata);
});


/* endpoint: GET /examples/auth/passport/local/page2 */
router.get('/local/page2', ensureLogin, function (req, res) {
    'use strict';
    console.log("Cookies2: ", req.cookies);
    var vdata = {
        title: 'Supermean examples - passportJS local authentication',
        desc: 'Supermean example for passportJS.',
        keywords: 'supermean, mean stack, examples',
        static_files: config.static_files
    };

    res.render('examples/auth/passport/page2', vdata);
});


/* endpoint: GET /examples/auth/passport/local/page3 */
router.get('/local/page3', ensureLogin, function (req, res) {
    'use strict';

    var vdata = {
        title: 'Supermean examples - passportJS local authentication',
        desc: 'Supermean example for passportJS.',
        keywords: 'supermean, mean stack, examples',
        static_files: config.static_files
    };

    res.render('examples/auth/passport/page3', vdata);
});



 /* endpoint: GET /examples/auth/passport/local/badlogin
 * redirect on this page if authentication is not passed
 */
router.get('/badlogin', function (req, res) {
    'use strict';

    var vdata = {
        title: 'Supermean examples - passportJS local authentication',
        desc: 'Supermean example for passportJS.',
        keywords: 'supermean, mean stack, examples',
        static_files: config.static_files
    };

    res.render('examples/auth/passport/badlogin', vdata);
});

/* endpoint: GET /examples/auth/passport/local/badlogin
 * redirect on this page if authentication is not passed
 */
router.get('/logout', function (req, res) {
    'use strict';
    req.logout();
    res.redirect('/examples/auth/passport');
});




module.exports = router;