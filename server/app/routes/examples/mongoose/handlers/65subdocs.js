/**
 * GET /examples/mongoose/65subdocs...
 */

require('rootpath')();
var subdocsModel = require('server/app/models/examples/subdocs');
var errorsLib = require('server/app/lib/errorsLib');

//mongoose promisification
var Bpromise = require('bluebird');
Bpromise.promisifyAll(require('mongoose')); //enables execAsync()


/*****************************************************************************************
* GET /examples/mongoose/65subdocs-savenew *
*****************************************************************************************
* Save doc with embeded child doc.
* Notice: Each subdoc gets its own _id. */
module.exports.savenew = function (req, res, next) {
    'use strict';

    //main doc
    var docNew = {
        str: 'My new document with child doc.',
        num: 23
    };

    //subdoc (if subdoc is inserted in array a an unique _id will be assigned)
    var docSub = {
        name: 'Petar'
    };


    subdocsModel.saveDocAsync(docNew, docSub)
        .then(function (resultArr) {
            console.log('Inserted: \n' + JSON.stringify(resultArr, null, 2));
            res.send('Inserted: <pre>' + JSON.stringify(resultArr, null, 2) + '</pre>');
        })
        .catch(function (err) {
            err.status = err.status || 500;
            errorsLib.onErrorCatch(err, res);
        });

};
/*
{
  "__v": 0,
  "updated_at": "2016-07-28T17:07:07.783Z",
  "created_at": "2016-07-28T17:07:07.783Z",
  "str": "My new document with child doc.",
  "_id": "579a3bbbfcabf537548e8212",
  "arr": [
    {
      "name": "Petar",
      "_id": "579a3bbbfcabf537548e8213"
    }
  ],
  "obj": {
    "name": "Petar"
  }
}
 */



/*************************************************
* GET /examples/mongoose/65subdocs-removesubdoc  *
**************************************************
* Finding subdoc by _id and removing it from main doc. */
module.exports.removesubdoc = function (req, res, next) {
    'use strict';

    subdocsModel.removeSubdocByIdAsync()
        .then(function (resultArr) {
            console.log('Results: \n' + JSON.stringify(resultArr, null, 2));
            res.send('Results: <pre>' + JSON.stringify(resultArr, null, 2) + '</pre>');
        })
        .catch(function (err) {
            err.status = err.status || 500;
            errorsLib.onErrorCatch(err, res);
        });

};
/*
Browser & console:
-------------------------------
Results:
{
  "_id": "579a1fd34e96a2014ce7f727",
  "updated_at": "2016-07-28T15:08:03.697Z",
  "created_at": "2016-07-28T15:08:03.697Z",
  "str": "My new document with child doc.",
  "__v": 0,
  "arr": [
    {
      "name": "Marković",
      "_id": "579a1fd34e96a2014ce7f729"
    }
  ],
  "obj": {
    "name": "Marković"
  }
}

 */



/*************************************************
* GET /examples/mongoose/65subdocs-findparent  *
**************************************************
* Finding parent doc by quering subdoc property. */
module.exports.findparent = function (req, res, next) {
    'use strict';

    var q = 'Marković';

    subdocsModel.findParentQuery(q)
        .execAsync()
        .then(function (resultArr) {
            console.log('Results: \n' + JSON.stringify(resultArr, null, 2));
            res.send('Results: <pre>' + JSON.stringify(resultArr, null, 2) + '</pre>');
        })
        .catch(function (err) {
            err.status = err.status || 500;
            errorsLib.onErrorCatch(err, res);
        });

};
/*
Browser & console:
-----------------------------
Results:
[
  {
    "_id": "579a3bbbfcabf537548e8212",
    "updated_at": "2016-07-28T17:07:07.783Z",
    "created_at": "2016-07-28T17:07:07.783Z",
    "str": "My new document with child doc.",
    "__v": 0,
    "arr": [
      {
        "name": "Petar",
        "_id": "579a3bbbfcabf537548e8213"
      }
    ],
    "obj": {
      "name": "Petar"
    }
  },
  {
    "_id": "579a3c9833ed945255fc0d16",
    "updated_at": "2016-07-28T17:10:48.779Z",
    "created_at": "2016-07-28T17:10:48.779Z",
    "str": "My new document with child doc.",
    "__v": 0,
    "arr": [
      {
        "name": "Petar",
        "_id": "579a3c9833ed945255fc0d17"
      }
    ],
    "obj": {
      "name": "Petar"
    }
  }
]
 */
