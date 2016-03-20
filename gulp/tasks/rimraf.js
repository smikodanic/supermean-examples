/**
 * Delete /client/dist/ directory
 */
var rimraf = require('rimraf');

module.exports = function () {
    'use strict';
    rimraf('./client/dist', function () {
        console.log('-rimraf deleted /client/dist !');
    });
};