/**
 * GET /examples/mongoose/01schematypes-misc
 *
 * *** Misc schema types: Date, Boolean, Array, Mixed, ObjectId
 */
require('rootpath')();
var SchematypesMiscModel = require('server/app/models/examples/schematypesMisc');
var errorsLib = require('server/app/lib/errorsLib');



//define input vars
var datum = new Date('12 January 1981');



module.exports = function (req, res, next) {
    'use strict';

    var docInput = {
        dat: datum,
        bul: false,
        my_arr: [1, 23, 5, 8], //[1, 23, 5, 8, 'sa'] cast error
        mix: {arr: ['one', 2, 'three'], str: 'Some string', num: 23},
        mix_arr: [56, 'sasa', {prop: 128, prop2: 'strg'}],
        my_id: '577fde18ea79fe632b75cb67' //must have 24 chars
    };

    //insert doc
    SchematypesMiscModel.saveDocAsync(docInput)
        .then(data => res.send('Data inserted by use of Bluebird: <pre>' + JSON.stringify(data, null, 2) + '</pre>'))
        .catch(err => {
            err.status = err.status || 500;
            errorsLib.onErrorCatch(err, res);
        });

};


/*
MONGO:
{
    "_id" : ObjectId("577feec23663203e3728ad7c"),
    "updated_at" : ISODate("2016-07-08T18:19:46.276+0000"),
    "created_at" : ISODate("2016-07-08T18:19:46.276+0000"),
    "dat" : ISODate("1981-01-11T23:00:00.000+0000"),
    "bul" : false,
    "mix" : {
        "num" : 23,
        "str" : "Some string",
        "arr" : [
            "one",
            2,
            "three"
        ]
    },
    "my_id" : ObjectId("577fde18ea79fe632b75cb67"),
    "mix_arr" : [
        56,
        "sasa",
        {
            "prop2" : "strg",
            "prop" : 128
        }
    ],
    "my_arr" : [
        1,
        23,
        5,
        8
    ],
    "__v" : 0
}
 */
