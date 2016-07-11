/**
 * Route handler for:
 * GET /examples/mongoose/00setupmongo
 *
 * ***
 * How to setup mongo databaseto make this examples work.
 *
 */
var config = require('../../../../config');

module.exports = function (req, res, next) {
    'use strict';

    var vdata = {
        title: 'Mongoose Examples - Setup Mongoose',
        desc: 'How to setup mongoose in SuperMEAN.',
        keywords: 'supermean, mean stack, mongoose, setup mongoose',
        static_files: config.static_files
    };

    res.render('examples/mongoose/00setupmongoose', vdata);
};
