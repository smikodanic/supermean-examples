/**
 ****** /server/app/routes/examples/mongoose/index.js
 * Server Side Example Routes - Mongoose
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

//**** setup mongo database
router.get('/00setupmongo', require('./handlers/00setupmongo'));
router.get('/00setupmongoose', require('./handlers/00setupmongoose'));

//**** schema types: String, Number, Boolean, ...
router.get('/01schematypes-string-callback', require('./handlers/01schematypes-string-callback'));
router.get('/01schematypes-string', require('./handlers/01schematypes-string'));
router.get('/01schematypes-number', require('./handlers/01schematypes-number'));
router.get('/01schematypes-misc', require('./handlers/01schematypes-misc'));
router.get('/01schematypes-buffer', require('./handlers/01schematypes-buffer'));

//**** schema field options: default, required, select, get, set, index, unique
router.get('/02schemaoptions-default', require('./handlers/02schemaoptions-default'));
router.get('/02schemaoptions-required', require('./handlers/02schemaoptions-required'));
router.get('/02schemaoptions-select', require('./handlers/02schemaoptions-select'));
router.get('/02schemaoptions-select2', require('./handlers/02schemaoptions-select2'));
router.get('/02schemaoptions-getset', require('./handlers/02schemaoptions-getset'));
router.get('/02schemaoptions-index', require('./handlers/02schemaoptions-index'));
router.get('/02schemaoptions-validate', require('./handlers/02schemaoptions-validate'));

//**** mongoose middlewares: pre, post
router.get('/05middlewareprepost', require('./handlers/05middlewareprepost'));

//**** operations: insert, delete, update, search
router.get('/10operationssave', require('./handlers/10operationssave'));
router.get('/11operationscreate', require('./handlers/11operationscreate'));
router.get('/12operationsinsertmany', require('./handlers/12operationsinsertmany'));
router.get('/15operationsremove', require('./handlers/15operationsremove'));
router.get('/16operationsfindidremove', require('./handlers/16operationsfindidremove'));
router.get('/17operationsfindoneremove', require('./handlers/17operationsfindoneremove'));
router.get('/20operationsupdate', require('./handlers/20operationsupdate'));
router.get('/21operationsfindidupdate', require('./handlers/21operationsfindidupdate'));
router.get('/22operationsfindoneupdate', require('./handlers/22operationsfindoneupdate'));
router.get('/25operationsfind', require('./handlers/25operationsfind'));
router.get('/26operationsfindid', require('./handlers/26operationsfindid'));
router.get('/27operationsfindone', require('./handlers/27operationsfindone'));
router.get('/28operationscount', require('./handlers/28operationscount'));
router.get('/28operationscountfind', require('./handlers/28operationscount_find'));
router.get('/29operationsdistinct', require('./handlers/29operationsdistinct'));

//**** query
router.get('/35queryfind', require('./handlers/35queryfind'));

//**most used
router.get('/36querymostused-common', require('./handlers/36querymostused').common);
router.get('/36querymostused-distinct', require('./handlers/36querymostused').distinct);
router.get('/36querymostused-regex', require('./handlers/36querymostused').regex);
router.get('/36querymostused-select', require('./handlers/36querymostused').select);




router.get('/36querydolwhere', require('./handlers/36queries').dolwhere);


module.exports = router;
