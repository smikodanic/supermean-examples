/**
 * /server/app/controllers/examples/index.js
 */
require('rootpath');
var config = require('server/app/config/');

module.exports = function (router) {
    'use strict';

    /* endpoint: GET / */
    router.get('/', function (req, res) {

        var vdata = {
            title: 'Supermean examples',
            desc: 'A list of supermean examples.',
            keywords: 'supermean, mean stack, examples',
            static_files: config.static_files
        };

        res.render('examples/index', vdata);
    });

    router.get('/login', function (req, res) {

        var vdata = {
            title: 'Supermean examples - LOGIN (server side)',
            desc: 'Supermean example for server side login.',
            keywords: 'supermean, mean stack, examples',
            static_files: config.static_files
        };

        res.render('examples/login', vdata);
    });

};