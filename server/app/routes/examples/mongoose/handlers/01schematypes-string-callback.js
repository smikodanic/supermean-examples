/**
 * GET /examples/mongoose/01schematypes-string-callback
 */

require('rootpath')();
var SchematypesStringModel = require('server/app/models/examples/schematypesString');

module.exports = function (req, res, next) {
    'use strict';

    var docInput = {
        str_simple: 'A Something - callback version',
        str_lower: 'LoWERcased',
        str_upper: 'upperCASED',
        str_trim: '    trimmed    ',
        str_match: 'a',
        str_enum: 'dog'
    };

    //insert doc
    SchematypesStringModel.saveDoc(docInput, res);

};


/*
MONGO:

 */
