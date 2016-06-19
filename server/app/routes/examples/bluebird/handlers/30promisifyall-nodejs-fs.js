/**
 * Route handler for:
 * GET /examples/bluebird/30promisifyall-nodejs-fs
 *
 * ***
 * Promisification of all NodeJS 'fs' API methods.
 *
 * Notice an arrow function annotation =>.
 */


var BPromise = require('bluebird');
const fs = require('fs');
const fsBP = BPromise.promisifyAll(fs);

module.exports = function (req, res, next) {
    'use strict';
    res.send('View console results.');

    var filePath = '/etc/hostname';

    //callback solution
    fs.readFile(filePath, 'utf-8', (err, data) => {
        console.log('CB: \n', data);
    });


    //bluebird solution
    fs.readFileAsync(filePath, 'utf-8') //also you can use fsBP.readFileAsync()
        .then((contents) => {
            console.log('BP: \n', contents);
        }).catch((e) => {
            console.error(e.stack);
        });

};

/*
OUTPUT

CB:
 komp

BP:
 komp

 */
