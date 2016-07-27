/**
 * GET /examples/mongoose/60multiconn...
 */

require('rootpath')();
var multiconnModel = require('server/app/models/examples/multiconn');
var errorsLib = require('server/app/lib/errorsLib');




/*****************************************************************************************
* GET /examples/mongoose/60multiconn-dynamic *
*****************************************************************************************
* List all indexes for a given collection. */
module.exports.dynamic = function (req, res, next) {
    'use strict';

    var docNew = {
        str: 'Nesto',
        num: 23
    };


    multiconnModel.saveDocAsync(docNew)
        .then(function (results) {
            console.log('Inserted: \n' + JSON.stringify(results, null, 2));
            res.send('Inserted: <pre>' + JSON.stringify(results, null, 2) + '</pre>');
        })
        .catch(function (err) {
            err.status = err.status || 500;
            errorsLib.onErrorCatch(err, res);
        });

};

