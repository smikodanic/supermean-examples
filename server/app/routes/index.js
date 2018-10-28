/**
 * ***** /server/app/routes/index.js
 * SuperMEAN root endpoints
 */

var express = require('express');
var router = express.Router();
var chalk = require('chalk');


/**
 * GET /
 * Homepage
 */
router.get('/', function (req, res) {
    'use strict';
    var vdata = {
        title: 'SuperMean - MEAN Stack Framework - API, Single Page App, Multi Page App',
        desc: 'SuperMEAN is powerfull framework for creating MEAN Stack Applications. Build your API, Single Page App or Multi Page App with this powerfull MEAN Stack.',
        keywords: 'supermean, mean stack, mongodb, expressjs, angularjs, nodejs'
    };
    res.render('public/index', vdata);
});

/**
 * POST /
 * Sending inquiry to email.
 */
router.post('/send', function (req, res) {
    'use strict';

    var data = req.body;
    // console.log(JSON.stringify(data, null, 4));

    var vdata = {
        title: 'Sent email - Supermean',
        desc: 'SuperMEAN is powerfull framework for creating MEAN Stack Applications. Build your API, Single Page App or Multi Page App with this powerfull MEAN Stack.',
        keywords: 'supermean, mean stack, mongodb, expressjs, angularjs, nodejs'
    };
    res.render('public/emailsent', vdata);

});










/* endpoint: GET /404 */
router.get('/404', function (req, res) {
    'use strict';
    var vdata = {
        title: 'Page Not Found',
        desc: 'Error 404: web page not found.',
        keywords: '404, not found'
    };
    res.status(404).render('_errors/error404', vdata);
});


module.exports = router;
