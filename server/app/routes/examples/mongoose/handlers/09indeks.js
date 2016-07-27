/**
 * GET /examples/mongoose/09indeks...
 */

require('rootpath')();
var indeksModel = require('server/app/models/examples/indeks');
var errorsLib = require('server/app/lib/errorsLib');




/*****************************************************************************************
* GET /examples/mongoose/09index-listall *
*****************************************************************************************
* List all indexes for a given collection. */
module.exports.listall = function (req, res, next) {
    'use strict';


    indeksModel.listIndeksAsync()
        .then(function (results) {
            console.log('Indexes: \n' + JSON.stringify(results, null, 2));
            res.send('Indexes: <pre>' + JSON.stringify(results, null, 2) + '</pre>');
        })
        .catch(function (err) {
            err.status = err.status || 500;
            errorsLib.onErrorCatch(err, res);
        });

};
/*
CONSOLE:
{
  "_id_": [
    [
      "_id",
      1
    ]
  ],
  "single_1": [
    [
      "single",
      1
    ]
  ],
  "ttl_1": [
    [
      "ttl",
      1
    ]
  ],
  "spar_1": [
    [
      "spar",
      1
    ]
  ],
  "desc_text": [
    [
      "_fts",
      "text"
    ],
    [
      "_ftsx",
      1
    ]
  ],
  "c1_1_c2_-1": [
    [
      "c1",
      1
    ],
    [
      "c2",
      -1
    ]
  ]
}
 */


/*****************************************************************************************
* GET /examples/mongoose/09index-removeall *
*****************************************************************************************
* Remove all indexes for a given collection. */
module.exports.removeall = function (req, res, next) {
    'use strict';


    indeksModel.removeIndeksAsync()
        .then(function (results) {
            console.log('Indexes: \n' + JSON.stringify(results, null, 2));
            res.send('Indexes: <pre>' + JSON.stringify(results, null, 2) + '</pre>');
        })
        .catch(function (err) {
            err.status = err.status || 500;
            errorsLib.onErrorCatch(err, res);
        });

};
/*
true
 */



/*****************************************************************************************
* GET /examples/mongoose/09index-buildind *
*****************************************************************************************
* Build all indexes for a given collection. */
module.exports.buildind = function (req, res, next) {
    'use strict';


    indeksModel.buildIndeksAsync()
        .then(function (results) {
            console.log('Indexes: \n' + JSON.stringify(results, null, 2));
            res.send('Indexes: <pre>' + JSON.stringify(results, null, 2) + '</pre>');
        })
        .catch(function (err) {
            err.status = err.status || 500;
            errorsLib.onErrorCatch(err, res);
        });

};
/*
true
 */
