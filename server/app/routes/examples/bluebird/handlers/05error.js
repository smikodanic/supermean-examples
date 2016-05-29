/**
 * Route handler for:
 * GET /examples/bluebird/04error
 *
 * ***
 * .error()
 *
 */

var BPromise = require('bluebird');
var fs = BPromise.promisifyAll(require('fs'));

module.exports = function (req, res, next) {
    'use strict';


    fs.readFileAsync('myfile.json').then(JSON.parse).then(function (json) {
        console.log('Successful json');
    }).catch(SyntaxError, function (e) {
        console.error('file contains invalid json' + e);
    }).error(function (e) {
        res.send('unable to read file, because: ' + e.message);
        console.error('unable to read file, because: ', e.message);
    });


};
