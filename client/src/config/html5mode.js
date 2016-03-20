/**
 * $location in HTML5 mode
 *
 * Notice:
 * Dont forget <base> tag! (https://docs.angularjs.org/error/$location/nobase)
 */

module.exports = function (clientApp) {
    'use strict';
    clientApp.config(function ($locationProvider) {
        /* three modes defined */
        $locationProvider.html5Mode(true); //http://localhost:3000/example
        // $locationProvider.html5Mode(false).hashPrefix('!'); //http://localhost:3000/something#!/example
        // $locationProvider.html5Mode(false); //http://localhost:3000/something#/example
    });
};