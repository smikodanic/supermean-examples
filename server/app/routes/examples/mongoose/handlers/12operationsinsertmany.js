/**
 * GET /examples/mongoose/12operationsinsertmany'
 *
 * *** create new docs
 * http://mongoosejs.com/docs/documents.html
 * http://mongoosejs.com/docs/api.html#document-js
 */
require('rootpath')();
var operations = require('server/app/models/examples/operations');
var errorsLib = require('server/app/lib/errorsLib');


module.exports = function (req, res, next) {
  'use strict';

    //invalid input
    var docInput = {str: 'String 12 !', my_id: '577fde18ea79fe632b75c012'};

    //valid input (must be array of docs)
    //my_id must be unique
    var docInputArr = [
        {str: 'From array 17 !', my_id: '577fde18ea79fe632b75c017'},
        {str: 'From array 18 !', my_id: '577fde18ea79fe632b75c018'}
    ];



    operations
        .insManyDocAsync(docInputArr)
        .then((data) => {
            console.log('Inserted into mongoDB: \n' + JSON.stringify(data, null, 2));
            res.send('Inserted into mongoDB: <pre>' + JSON.stringify(data, null, 2) + '</pre>');
        })
        .catch(err => {
            err.status = err.status || 500;
            errorsLib.onErrorCatch(err, res);
        });

};


/*
MongoDB inserted doc:
{
    "_id" : ObjectId("5790c3785e593fb412c13f66"),
    "updated_at" : ISODate("2016-07-21T12:43:36.057+0000"),
    "created_at" : ISODate("2016-07-21T12:43:36.056+0000"),
    "str" : "From array 18 !",
    "my_id" : ObjectId("577fde18ea79fe632b75c018"),
    "obj" : {
        "arr_num" : [

        ],
        "arr_str" : [

        ]
    },
    "dat" : ISODate("2016-07-21T12:43:36.054+0000")
}
{
    "_id" : ObjectId("5790c3785e593fb412c13f65"),
    "updated_at" : ISODate("2016-07-21T12:43:36.056+0000"),
    "created_at" : ISODate("2016-07-21T12:43:36.056+0000"),
    "str" : "From array 17 !",
    "my_id" : ObjectId("577fde18ea79fe632b75c017"),
    "obj" : {
        "arr_num" : [

        ],
        "arr_str" : [

        ]
    },
    "dat" : ISODate("2016-07-21T12:43:36.039+0000")
}
 */
