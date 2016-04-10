/**
 ****** /server/app/routes/examples/index.js
 * Server Side Examples
 */

var config = require('../../config');
var express = require('express');
var router = express.Router();


/* endpoint: GET /examples */
router.get('/', function (req, res, next) {
    'use strict';
    var vdata = {
        title: 'List of superMEAN examples',
        desc: 'A list of supermean examples.',
        keywords: 'supermean, mean stack, examples',
        static_files: config.static_files
    };

    res.render('examples/index', vdata);
});


module.exports = router;

