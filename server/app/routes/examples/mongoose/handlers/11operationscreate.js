/**
 * GET /examples/mongoose/11operationscreate'
 *
 * *** create new docs
 * http://mongoosejs.com/docs/documents.html
 * http://mongoosejs.com/docs/api.html#document-js
 */
require('rootpath')();
var doc = require('server/app/models/examples/operations');
var errorsLib = require('server/app/lib/errorsLib');


module.exports = function (req, res, next) {
  'use strict';

    //invalid input
    var docInput = {str: 'From array 1 !', my_id: '577fde18ea79fe632b75c008'};

    //valid input (must be array of docs)
    var docInputArr = [
        {str: 'From array 1 !', my_id: '577fde18ea79fe632b75c009'},
        {str: 'From array 2 !', my_id: '577fde18ea79fe632b75c010'}
    ];



    doc
        .createDocAsync(docInputArr)
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
    "_id" : ObjectId("578d009d0c1873663130f4d4"),
    "updated_at" : ISODate("2016-07-18T16:15:25.633+0000"),
    "created_at" : ISODate("2016-07-18T16:15:25.633+0000"),
    "str" : "From array 2 !",
    "my_id" : ObjectId("577fde18ea79fe632b75c010"),
    "obj" : {
        "arr_num" : [

        ],
        "arr_str" : [

        ]
    },
    "dat" : ISODate("2016-07-18T16:15:25.619+0000"),
    "__v" : NumberInt(0)
}
{
    "_id" : ObjectId("578d009d0c1873663130f4d3"),
    "updated_at" : ISODate("2016-07-18T16:15:25.625+0000"),
    "created_at" : ISODate("2016-07-18T16:15:25.625+0000"),
    "str" : "From array 1 !",
    "my_id" : ObjectId("577fde18ea79fe632b75c009"),
    "obj" : {
        "arr_num" : [

        ],
        "arr_str" : [

        ]
    },
    "dat" : ISODate("2016-07-18T16:15:25.614+0000"),
    "__v" : NumberInt(0)
}
 */
