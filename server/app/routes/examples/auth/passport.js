/**
 ****** /server/app/routes/examples/index.js
 * Server Side Examples
 */

var config = require('../../../config');
var express = require('express');
var router = express.Router();


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


/* endpoint: GET /examples/auth/passport/local */
router.get('/local', function (req, res) {
    'use strict';
    var vdata = {
        title: 'Supermean examples - passportJS local authentication',
        desc: 'Supermean example for passportJS.',
        keywords: 'supermean, mean stack, examples',
        static_files: config.static_files
    };

    res.render('examples/auth/passport/local_form', vdata);
});



/* endpoint: POST /examples/auth/passport/local/login */
router.post('/local/login', function (req, res) {
    'use strict';
    var vdata = {
        title: 'Supermean examples - passportJS local authentication',
        desc: 'Supermean example for passportJS.',
        keywords: 'supermean, mean stack, examples',
        static_files: config.static_files
    };

    res.render('examples/auth/passport/local_login', vdata);
});


module.exports = router;

