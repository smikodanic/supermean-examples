/**
 * Actions on model
 */


//bluebird promisification
const BPromise = require('bluebird');
const mongoose = BPromise.promisifyAll(require('mongoose'));
const util = require('util');

//define model
var miscModel = mongoose.model('miscMD', require('./schema/Misc'));



//create() docs before testiings
module.exports.fillCollection = function (docInput) {
    'use strict';
    return miscModel.createAsync(docInput);
};


//usage of lean(): lean returns plain mongodb doc
module.exports.lean = function () {
    'use strict';
    return miscModel.findOne().lean()
        .execAsync()
        .then(function (docOrig) {

            /***** This will not work! Because of lean() docOrig doesn't have save(9 method !!! *****/
            // return docOrig.saveAsync();

            //saving new doc (make duplicated doc)
            delete docOrig._id;
            var doc = new miscModel(docOrig); //convert plain mongo doc into mongoose doc which has save() method
            return doc.saveAsync();
        });
};


var opts = {
    versionKey: false
};

module.exports.toJson = function () {
    'use strict';
    return miscModel.findOne().execAsync()
        .then(function (doc) {
            doc.toJSON(opts);

            delete doc.str;

            console.log('toJSON: ' + doc);
            return doc;
        });
};


module.exports.toObj = function () {
    'use strict';
    return miscModel.findOne().execAsync()
        .then(function (doc) {
            doc.toObject(opts);

            delete doc.str;

            console.log('toObject: ' + doc);
            return doc;
        });
};

module.exports.toStr = function () {
    'use strict';
    return miscModel.findOne().execAsync()
        .then(function (doc) {
            doc.toString();

            delete doc.str;

            console.log('toString: ' + doc);
            return doc;
        });
};







//////////////////// NATIVE MONGODB NODEJS DRIVER ///////////////////////////////////7
var collection = miscModel.collection;

//find Docs by using native driver
module.exports.findDocs = function () {
    'use strict';
    // return console.log(util.inspect(collection));

    collection.find().toArray(function (err, results) {
        console.log(JSON.stringify(results, null, 2));
    });

};
/*
[
  {
    "_id": "579e06685729bcac524d2d49",
    "updated_at": "2016-07-31T14:10:27.891Z",
    "created_at": "2016-07-31T14:08:40.869Z",
    "str": "modified value",
    "num": 15,
    "__v": 0
  },
  {
    "_id": "579e06685729bcac524d2d4a",
    "updated_at": "2016-07-31T14:08:40.872Z",
    "created_at": "2016-07-31T14:08:40.872Z",
    "str": "string 2",
    "num": 15,
    "__v": 0
  },

  ........
]
 */
