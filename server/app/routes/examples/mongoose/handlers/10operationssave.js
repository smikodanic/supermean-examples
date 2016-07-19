/**
 * GET /examples/mongoose/10operationssave'
 *
 * *** saving new doc
 * http://mongoosejs.com/docs/documents.html
 * http://mongoosejs.com/docs/api.html#document-js
 */
require('rootpath')();
var doc = require('server/app/models/examples/operations');
var errorsLib = require('server/app/lib/errorsLib');


module.exports = function (req, res, next) {
  'use strict';

    //valid input
    var docInput = {
        str: 'Some string 23 !!!',
        num: 33,
        dat: new Date('12 January 1981 19:25:55.567'),
        my_id: '577fde18ea79fe632b75c004',
        obj: {
            bul: true,
            arr_str: ['marko', 'marković', 'pero', 'perić'],
            arr_num: [5, 8, 13, 21]
        },
        mix: [{name: 'marko'}, {name: 'petar'}, [1, 2, 3]]
    };

    //invalid input (array of docs cannot be inserted by save() )
    var docInputArr = [
        {str: 'From array 1 !', my_id: '577fde18ea79fe632b75c006'},
        {str: 'From array 2 !', my_id: '577fde18ea79fe632b75c007'}
    ];



    doc
        .saveDocAsync(docInput)
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
    "_id" : ObjectId("578cf1df83eeafaf2aef35af"),
    "updated_at" : ISODate("2016-07-18T15:12:31.363+0000"),
    "created_at" : ISODate("2016-07-18T15:12:31.363+0000"),
    "str" : "Some string !!!",
    "num" : NumberInt(33),
    "my_id" : ObjectId("577fde18ea79fe632b75c003"),
    "mix" : [
        {
            "name" : "marko"
        },
        {
            "name" : "petar"
        },
        [
            NumberInt(1),
            NumberInt(2),
            NumberInt(3)
        ]
    ],
    "obj" : {
        "bul" : true,
        "arr_num" : [
            NumberInt(5),
            NumberInt(8),
            NumberInt(13),
            NumberInt(21)
        ],
        "arr_str" : [
            "marko",
            "marković",
            "pero",
            "perić"
        ]
    },
    "dat" : ISODate("1981-01-12T18:25:55.567+0000"),
    "__v" : NumberInt(0)
}
 */
