/**
 ****** /server/app/routes/examples/bluebird/index.js
 * Server Side Examples - Bluebird Promises
 */

var config = require('../../../config');
var express = require('express');
var router = express.Router();


/* endpoint: GET /examples/bluebird */
router.get('/', function (req, res, next) {
    'use strict';
    var vdata = {
        title: 'Bluebird Examples',
        desc: 'A list of supermean examples - bluebird examples.',
        keywords: 'supermean, mean stack, bluebird examples',
        static_files: config.static_files
    };

    res.render('examples/bluebird/index', vdata);
});




/******** EXAMPLES *****/
/* endpoint: GET /examples/bluebird/01newpromise */

//Core methods of Promise instance
router.get('/01newpromise', require('./handlers/01newpromise'));
router.get('/01newpromisefunction', require('./handlers/01newpromise_function'));
router.get('/02then', require('./handlers/02then'));
router.get('/02thenchain', require('./handlers/02then_chain'));
router.get('/02thenwithcatch', require('./handlers/02then_with_catch'));
router.get('/03spread', require('./handlers/03spread'));
router.get('/03spreadafterthen', require('./handlers/03spread_after_then'));
router.get('/03spreadbeforethen', require('./handlers/03spread_before_then'));
router.get('/04catch', require('./handlers/04catch'));
router.get('/05error', require('./handlers/05error'));
router.get('/06finallyhandler', require('./handlers/06finally_handler'));
router.get('/06finallyend', require('./handlers/06finally_end'));
router.get('/07bind', require('./handlers/07bind'));
router.get('/07bind2', require('./handlers/07bind2'));

//Core static methods of the Promise class
router.get('/08join', require('./handlers/08join'));
router.get('/08jointhen', require('./handlers/08join_then'));
router.get('/08jointhenables', require('./handlers/08join_thenables'));
router.get('/09try', require('./handlers/09try'));
router.get('/10method', require('./handlers/10method'));
router.get('/11resolve', require('./handlers/11resolve'));
router.get('/11resolvepromise', require('./handlers/11resolvepromise'));
router.get('/11resolvefunction', require('./handlers/11resolvefunction'));
router.get('/12reject', require('./handlers/12reject'));

//Synchronous inspection
router.get('/13isfulfilled', require('./handlers/13isfulfilled'));
router.get('/14isrejected', require('./handlers/14isrejected'));
router.get('/15ispending', require('./handlers/15ispending'));

//Collections
router.get('/16all', require('./handlers/16all'));


//misc
router.get('/100misctimedelay', require('./handlers/100misc_timedelay'));



module.exports = router;
