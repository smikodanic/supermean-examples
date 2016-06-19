/**
 * Route handler for:
 * GET /examples/bluebird/33ascallback-reject
 *
 * ***
 * Example with rejected promise.
 */

var BPromise = require('bluebird');

module.exports = function (req, res, next) {
    'use strict';
    res.send('View console results.');

    BPromise.reject(new Error('My custom error!!!'))
        .asCallback(function (err, result) {
            if (err) {
                console.error(err.stack); //err.message will give only 'My custom error!!!'
            } else {
                console.log(result);
            }
        });
};

/*
CONSOLE (notice err.stack):

Error: My custom error!!!
    at module.exports (/homenode/supermean/server/app/routes/examples/bluebird/handlers/33ascallback-rejected.js:15:21)
    at Layer.handle [as handle_request] (/homenode/supermean/node_modules/express/lib/router/layer.js:82:5)
    at next (/homenode/supermean/node_modules/express/lib/router/route.js:110:13)
    at Route.dispatch (/homenode/supermean/node_modules/express/lib/router/route.js:91:3)
    at Layer.handle [as handle_request] (/homenode/supermean/node_modules/express/lib/router/layer.js:82:5)
    at /homenode/supermean/node_modules/express/lib/router/index.js:267:22
    at Function.proto.process_params (/homenode/supermean/node_modules/express/lib/router/index.js:321:12)
    at next (/homenode/supermean/node_modules/express/lib/router/index.js:261:10)
    at Function.proto.handle (/homenode/supermean/node_modules/express/lib/router/index.js:166:3)
    at router (/homenode/supermean/node_modules/express/lib/router/index.js:35:12)
    at Layer.handle [as handle_request] (/homenode/supermean/node_modules/express/lib/router/layer.js:82:5)
    at trim_prefix (/homenode/supermean/node_modules/express/lib/router/index.js:302:13)
    at /homenode/supermean/node_modules/express/lib/router/index.js:270:7
    at Function.proto.process_params (/homenode/supermean/node_modules/express/lib/router/index.js:321:12)
    at next (/homenode/supermean/node_modules/express/lib/router/index.js:261:10)
    at /homenode/supermean/node_modules/express/lib/router/index.js:603:15
 */
