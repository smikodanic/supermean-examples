/**
 * $location in HTML5 mode
 *
 * IMPORTANT:
 * Dont forget <base href="/"> tag in /server/app/views/clientApp.ejs file!
 *    https://docs.angularjs.org/error/$location/nobase
 */

module.exports = function ($locationProvider) {
    'use strict';
    /* three modes defined */
    $locationProvider.html5Mode(true); //http://localhost:3000/example
    // $locationProvider.html5Mode(false).hashPrefix('!'); //http://localhost:3000/something#!/example
    // $locationProvider.html5Mode(false); //http://localhost:3000/something#/example
};
