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
        title: 'Mongoose Examples - Setup MongoDB',
        desc: 'How to setup mongo database..',
        keywords: 'supermean, mean stack, mongoose examples, setup mongo db'
    };

    res.render('examples/mongoose/00setupmongo', vdata);
};
