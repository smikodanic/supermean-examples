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
router.get('/00setupmongoose', require('./handlers/00setupmongoose'));

//****schema types
router.get('/01schematypes-string-callback', require('./handlers/01schematypes-string-callback'));
router.get('/01schematypes-string', require('./handlers/01schematypes-string'));
router.get('/01schematypes-number', require('./handlers/01schematypes-number'));
router.get('/01schematypes-misc', require('./handlers/01schematypes-misc'));
router.get('/01schematypes-buffer', require('./handlers/01schematypes-buffer'));


router.get('/02schemaoptions-default', require('./handlers/02schemaoptions-default'));




module.exports = router;
