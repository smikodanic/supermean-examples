/**
 * GET /examples/mongoose/35queryobject...
 *
 * *** Creating query object by find().
 * The example is not using Bleuebird promise.
 */
require('rootpath')();
var mongoose = require('mongoose');
var operationsModel = mongoose.model('operations', require('server/app/models/examples/schema/Operations'));
var errorsLib = require('server/app/lib/errorsLib');

//creating query object by find(), findOne(), findById()
module.exports.byfind = function (req, res, next) {
    'use strict';

    //creating query object
    var query = operationsModel.find();

    query
        .where({str: /From/ig})
        .exec((err, resultsArr) => {
            if (err) {
                err.status = err.status || 500;
                errorsLib.onErrorCatch(err, res);
                return;
            }

            console.log('Results: \n' + JSON.stringify(resultsArr, null, 2));
            res.send('Results: <pre>' + JSON.stringify(resultsArr, null, 2) + '</pre>');
        });

};

//creating query object by Query() constructor
module.exports.byconstructor = function (req, res, next) {
    'use strict';

    //creating query object
    var operationsSchema = require('server/app/models/examples/schema/Operations');
    var query = new mongoose.Query();

    query
        .where({str: /From/ig})
        .exec((err, resultsArr) => {
            if (err) {
                err.status = err.status || 500;
                errorsLib.onErrorCatch(err, res);
                return;
            }

            console.log('Results: \n' + JSON.stringify(resultsArr, null, 2));
            res.send('Results: <pre>' + JSON.stringify(resultsArr, null, 2) + '</pre>');
        });

    console.log(JSON.stringify(query.getQuery(), null, 2));

};
