/**
 * ***** /server/app/routes/index.js
 * SuperMEAN root endpoints
 */

var config = require('../config');
var express = require('express');
var router = express.Router();


/* endpoint: GET / */
router.get('/', function (req, res) {
    'use strict';
    var vdata = {
        title: 'SuperMEAN - MEAN stack',
        desc: 'SuperMEAN stack: mongodb, expressjs, angularjs and nodejs. Automatic routing from server side to client side.',
        keywords: 'supermean, mean stack, mongodb, expressjs, angularjs, nodejs',
        static_files: config.static_files
    };
    res.render('public/index', vdata);
});


/* endpoint: GET /404 */
router.get('/404', function (req, res) {
    'use strict';
    var vdata = {
        title: 'Page Not Found',
        desc: 'Error 404: web page not found.',
        keywords: '404, not found',
        static_files: config.static_files
    };
    res.status(404).render('_errors/error404', vdata);
});


module.exports = router;