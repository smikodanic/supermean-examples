/**
 * Delete /client/dist/ directory
 */
var rimraf = require('rimraf');

module.exports = function () {
    'use strict';
    rimraf('./client/dist', function () {
        console.log('/client/dist deleted by rimraf!');
    });
};
