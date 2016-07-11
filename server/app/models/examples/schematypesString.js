/**
 * Actions on SchematypesStringModel
 */


//bluebird promisification
const BPromise = require('bluebird');
const mongoose = BPromise.promisifyAll(require('mongoose'));

//define model
var SchematypesStringModel = mongoose.model('SchematypesString', require('./schema/SchematypesString'));




//bluebird version
module.exports.saveDocAsync = function (docInput) {
    'use strict';

    var doc = new SchematypesStringModel(docInput);

    //insert doc into mongodb and return Bluebird Promise
    return doc.saveAsync();
};



//callback version
module.exports.saveDoc = function (docInput, res) {
    'use strict';

    var doc = new SchematypesStringModel(docInput);

    //insert doc into mongodb
    doc.save(function (err, data) {
        if (err) {
            console.error(err);
        } else {
            res.send('Data inserted by use of callback: <pre>' + JSON.stringify(data, null, 2) + '</pre>')
        }
        //disconnect from mongodb
        // mongoose.disconnect();
    });
};
