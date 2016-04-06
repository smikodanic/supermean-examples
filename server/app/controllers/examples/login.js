/**
 * /server/app/controllers/examples/login.js
 */
require('rootpath');
var config = require('server/app/config/');

module.exports = function (router) {
    'use strict';

    /* endpoint: GET /examples/login */
    router.get('/', function (req, res) {

        var vdata = {
            title: 'Supermean examples - LOGIN FORM (server side)',
            desc: 'Supermean example for server side login.',
            keywords: 'supermean, mean stack, examples',
            static_files: config.static_files
        };

        res.render('examples/login', vdata);
    });


    /* endpoint: POST /examples/login */
    router.post('/', function (req, res) {

        var vdata = {
            title: 'Supermean examples - LOGGED IN (server side)',
            desc: 'Supermean example for server side login.',
            keywords: 'supermean, mean stack, examples',
            static_files: config.static_files
        };

        res.render('examples/logged', vdata);
    });

};