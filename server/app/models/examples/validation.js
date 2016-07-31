/**
 * Actions on model
 */


//bluebird promisification
const BPromise = require('bluebird');
const mongoose = BPromise.promisifyAll(require('mongoose'));

//define model
var ValidationSchema = require('./schema/Validation');
var validationModel = mongoose.model('validationMD', ValidationSchema);



//save one doc before validation
module.exports.saveDocAsync = function (docNew) {
    'use strict';
    var doc = new validationModel(docNew); //create new doc and assign save() method to that doc
    return doc.saveAsync();
};




//perform async validation before updating document: doc.validate()
/* This example is finding one doc and (last updated_at) and
 * try to update 'str_meth' with an invalid value '9as'. The value is invalid because it contain number 9. */
module.exports.validateDoc = function () {
    'use strict';

    return validationModel.findOne().sort('-updated_at').execAsync()
        .then(function (doc) {
            console.log('docOld: ' + JSON.stringify(doc, null, 2));
            /*
            docOld: {
              "_id": "579dbb8719aa7aad20387f56",
              "updated_at": "2016-07-31T08:49:11.192Z",
              "created_at": "2016-07-31T08:49:11.192Z",
              "str_meth": "abc def 1",
              "__v": 0
            }
             */

            //defining new doc
            ////IMPORTANT: set() doesn't perform validation. It just sets new value.
            doc.set('str_meth', '9as'); //invalid value because of 9
            // doc.set('str_meth', 'some string without numbers'); //valid value

            //=-=-= updating doc with save()
            // return doc.saveAsync(); //save() is executing validators defined in schema


            //=-=-= updating with update()
            //IMPORTANT: update() will not execute validators defined in schema. That's why we must run validate() before update()!
            var updOpts = {
                upsert: false, //will not create new doc
                multi: true //will not update multiple docs
            };

            return doc.validateAsync() //ValidationError: str_meth:9as---Input must not contain number.
                .then(function () {
                    return doc.updateAsync(doc, updOpts);
                });
        });

};


//perform sync validation before updating document: doc.validateSync()
/* This example is finding one doc and (last updated_at) and
 * try to update 'str_meth' with an invalid value '123ab'. The value is invalid because it contain number 123. */
module.exports.validateSyncDoc = function () {
    'use strict';

    return validationModel.findOne().sort('-updated_at').execAsync()
        .then(function (doc) {

            //defining new doc
            ////IMPORTANT: set() doesn't perform validation. It just sets new value.
            doc.set('str_meth', '123ab'); //invalid value because of 9
            // doc.set('str_meth', 'valid string - no numbers'); //valid value

            //=-=-= updating doc with save()
            // return doc.saveAsync(); //save() is executing validators defined in schema

            //sync vylidation
            var validationErr = doc.validateSync(); //ValidationError: str_meth:123ab---Input must not contain number.

            //=-=-= updating with update()
            //IMPORTANT: update() will not execute validators defined in schema. That's why we must run validateSync() before update()!
            var updOpts = {
                upsert: false, //will not create new doc
                multi: true //will not update multiple docs
            };

            if (!validationErr) {
                return doc.updateAsync(doc, updOpts);
            } else {
                throw validationErr;
                // return doc.errors;
            }


        });

};



//force path to be invalid
module.exports.makeInvalid = function () {
    'use strict';

    return validationModel.findOne().sort('-updated_at').execAsync()
        .then(function (doc) {
            console.log('docOld: ' + JSON.stringify(doc, null, 2));

            //make path invalid: doc.invalidate(path, errorMsg, value, [kind])
            doc.invalidate('str_meth', 'Path {PATH}:{VALUE} is intentionally invalid!', 'some valid string');


            //=-=-= updating doc with save()
            return doc.saveAsync(); //save() is executing validators defined in schema
        });
};
/*
ValidationError: Path str_meth:some valid string is intentionally invalid!
 */
