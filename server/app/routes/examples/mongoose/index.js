/**
 ****** /server/app/routes/examples/mongoose/index.js
 * Server Side Examples - Mongoose
 */

var config = require('../../../config');
var express = require('express');
var router = express.Router();


/* endpoint: GET /examples/mongoose */
router.get('/', function (req, res, next) {
    'use strict';
    var vdata = {
        title: 'Mongoose Examples',
        desc: 'A list of mongoose examples.',
        keywords: 'supermean, mean stack, mongoose examples',
        static_files: config.static_files
    };

    res.render('examples/mongoose/index', vdata);
});




/******** EXAMPLES *****/
/* endpoint: GET /examples/mongoose/00setupmongo */

//setup mongo database
router.get('/00setupmongo', require('./handlers/00setupmongo'));




module.exports = router;
