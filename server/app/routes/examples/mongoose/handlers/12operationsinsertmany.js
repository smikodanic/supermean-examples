/**
 * GET /examples/mongoose/12operationsinsertmany'
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
    var docInput = {str: 'String 12 !', my_id: '577fde18ea79fe632b75c012'};

    //valid input (must be array of docs)
    var docInputArr = [
        {str: 'From array 13 !', my_id: '577fde18ea79fe632b75c013'},
        {str: 'From array 14 !', my_id: '577fde18ea79fe632b75c014'}
    ];



    doc
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

 */
