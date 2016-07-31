/**
 * GET /examples/mongoose/90native...
 */

require('rootpath')();
var misc_model = require('server/app/models/examples/misc');
var errorsLib = require('server/app/lib/errorsLib');

//mongoose promisification
var Bpromise = require('bluebird');
Bpromise.promisifyAll(require('mongoose'));


/****************************************************
* GET /examples/mongoose/90native-listcollections *
*****************************************************
* find docs by using mongodb nodejs driver. */
module.exports.find = function (req, res, next) {
    'use strict';

    res.send('View console results !');

    misc_model.findDocs();
};

