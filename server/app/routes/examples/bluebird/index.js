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
        desc: 'A list of supermean examples - bluebird promise examples.',
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
router.get('/06finally-with-promise', require('./handlers/06finally_with_promise'));
router.get('/07bind', require('./handlers/07bind'));
router.get('/07bind2', require('./handlers/07bind2'));

//Core static methods of the Promise class
router.get('/08join', require('./handlers/08join'));
router.get('/08jointhen', require('./handlers/08join_then'));
router.get('/08jointhenables', require('./handlers/08join_thenables'));
router.get('/09try', require('./handlers/09try'));
router.get('/09try-spread', require('./handlers/09try_spread'));
router.get('/09try-next', function (req, res, next) {var err = new Error('greska'); next(err);}, require('./handlers/09try_next'));
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
router.get('/17props', require('./handlers/17props'));
router.get('/18some', require('./handlers/18some'));
router.get('/18some-spread', require('./handlers/18some_spread'));
router.get('/19any', require('./handlers/19any'));
router.get('/20map', require('./handlers/20map'));
router.get('/21reduce', require('./handlers/21reduce'));
router.get('/22filter', require('./handlers/22filter'));
router.get('/22filterspread', require('./handlers/22filterspread'));
router.get('/23each', require('./handlers/23each'));
router.get('/24mapseries', require('./handlers/24mapseries'));
router.get('/25race', require('./handlers/25race'));
// router.get('/30eachmapseriesmap', require('./handlers/30eachmapseriesmap'));


//promisification
router.get('/30promisifyall', require('./handlers/30promisifyall'));
router.get('/30promisifyall-error', require('./handlers/30promisifyall_error'));
router.get('/30promisifyall-spread', require('./handlers/30promisifyall_spread'));
router.get('/30promisifyall2', require('./handlers/30promisifyall2'));
router.get('/30promisifyall-nodejs-fs', require('./handlers/30promisifyall-nodejs-fs'));
router.get('/30promisifyall-nodejs-dns', require('./handlers/30promisifyall-nodejs-dns'));
router.get('/31promisify', require('./handlers/31promisify'));
router.get('/31promisify-multiargs', require('./handlers/31promisify_multiargs'));
router.get('/31promisify-nodejs-dnslookup', require('./handlers/31promisify_nodejs_dnslookup'));
router.get('/32fromcallback', require('./handlers/32fromcallback'));
router.get('/32fromcallback-nodejs-dnslookup', require('./handlers/32fromcallback_nodejs_dnslookup'));
router.get('/33ascallback', require('./handlers/33ascallback'));
router.get('/33ascallback-spread', require('./handlers/33ascallback_spread'));
router.get('/33ascallback-rejected', require('./handlers/33ascallback-rejected'));
router.get('/33ascallback-bp-cb', require('./handlers/33ascallback-bp-cb'));


//timers
router.get('/41delay', require('./handlers/41delay'));
router.get('/41delay-after-then', require('./handlers/41delay_after_then'));
router.get('/42timeout', require('./handlers/42timeout'));
router.get('/42timeout-delay', require('./handlers/42timeout_delay'));


//canclellation
router.get('/50cancel', require('./handlers/50cancel'));
router.get('/50cancel-finally', require('./handlers/50cancel_finally'));


//utility
router.get('/55tap', require('./handlers/55tap'));
router.get('/56call', require('./handlers/56call'));
router.get('/57get', require('./handlers/57get'));
router.get('/58return', require('./handlers/58return'));
router.get('/59throw', require('./handlers/59throw'));
router.get('/60reflect', require('./handlers/60reflect'));

//errors
router.get('/70operationalerror', require('./handlers/70operationalerror'));
router.get('/71timeouterror', require('./handlers/71timeouterror'));
router.get('/71timeouterror-gen', require('./handlers/71timeouterror_gen'));
router.get('/72cancellationerror', require('./handlers/72cancellationerror'));
router.get('/73agregateerror', require('./handlers/73agregateerror'));

//misc
router.get('/90misctimedelay', require('./handlers/90misc_timedelay'));
router.get('/91promiseflow', require('./handlers/91promiseflow'));
router.get('/92promiserejectedlater', require('./handlers/92promiserejectedlater'));
router.get('/93globalvarinsidethen', require('./handlers/93globalvarinsidethen'));



module.exports = router;
