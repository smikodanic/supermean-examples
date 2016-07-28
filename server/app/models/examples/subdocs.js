/**
 * Actions on model
 */


//bluebird promisification
const BPromise = require('bluebird');
const mongoose = BPromise.promisifyAll(require('mongoose'));

var SubdocsSchema = require('./schema/Subdocs');
var subdocsModel = mongoose.model('subdocsMD', SubdocsSchema);


//save doc
module.exports.saveDocAsync = function (docNew, docSub) {
    'use strict';

    var doc = new subdocsModel(docNew);

    //*** adding subdoc
    doc.arr.push(docSub);

    // doc.arr[0] = docSub;
    // doc.arr[1] = docSub;

    doc.obj = docSub;


    return doc.saveAsync();
};


//find by subdoc id and remove subdoc
module.exports.removeSubdocByIdAsync = function (docNew) {
    'use strict';

    return subdocsModel.findOne({}).execAsync()
        .then(function (doc) {

            console.log(JSON.stringify(doc, null, 2));
            /*
            {
              "_id": "579a1fd34e96a2014ce7f727",
              "updated_at": "2016-07-28T15:08:03.697Z",
              "created_at": "2016-07-28T15:08:03.697Z",
              "str": "My new document with child doc.",
              "__v": 0,
              "arr": [
                {
                  "name": "Marković",
                  "_id": "579a1fd34e96a2014ce7f728" //this will be removed
                },
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


            //removing subdoc from array 'arr'
            doc.arr.id('579a1fd34e96a2014ce7f728').remove();


            console.log(JSON.stringify(doc, null, 2));
            /*
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


            //ownerDocument()  returns parent object
            console.log('OWNER: ', doc.arr[0].ownerDocument());
            /*
            OWNER:  { _id: 579a1fd34e96a2014ce7f727,
            updated_at: Thu Jul 28 2016 17:08:03 GMT+0200 (CEST),
            created_at: Thu Jul 28 2016 17:08:03 GMT+0200 (CEST),
            str: 'My new document with child doc.',
            __v: 0,
            arr: [ { name: 'Marković', _id: 579a1fd34e96a2014ce7f729 } ],
            obj: { name: 'Marković' } }
             */


            return doc;

        });
};


//find parent doc by subdoc properts
module.exports.findParentQuery = function (q) {
    'use strict';

    //all queries returns almost same results
    // var query = subdocsModel.find().elemMatch('arr', {'name': {$regex: /PET/ig}});
    var query = subdocsModel.find().elemMatch('arr', {'name': /PETa/ig});
    // var query = subdocsModel.find().elemMatch('arr', {'name': {$eq: 'Petar'}});

    return query;
};
/*
query returns:
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

