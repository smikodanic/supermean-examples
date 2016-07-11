/**
 * Actions for users model
 */


//bluebird promisification
const BPromise = require('bluebird');
const mongoose = BPromise.promisifyAll(require('mongoose'));

//define model
var UsersModel = mongoose.model('Users', require('./schema/Users'));


//callback version
module.exports.saveUser = function (userDoc, res) {
    'use strict';

    var user = new UsersModel(userDoc);

    //object insertion
    user.save(function (err, data) {
        if (err) {
            console.error(err);
        } else {
            res.send('MongoDB connection established and data inserted: <pre>' + JSON.stringify(data, null, 2) + '</pre>');
            console.log(JSON.stringify(data, null, 2));
        }
        //disconnect from mongodb
        // mongoose.disconnect();
    });
};


//Bluebird version
module.exports.saveUserAsync = function (userDoc, res) {
    'use strict';

    var user = new UsersModel(userDoc);

    //return Bluebird Promise
    return user.saveAsync();
};
