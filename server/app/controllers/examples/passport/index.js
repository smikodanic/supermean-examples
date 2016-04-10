/**
 * /server/app/controllers/examples/login.js
 */
require('rootpath');
var config = require('server/app/config/');

module.exports = function (router) {
    'use strict';

    /* endpoint: GET /examples/passport */
    router.get('/', function (req, res) {

        var vdata = {
            title: 'superMEAN examples - passportJS',
            desc: 'Supermean example for passportJS.',
            keywords: 'supermean, mean stack, examples',
            static_files: config.static_files
        };

        res.render('examples/passport/index', vdata);
    });


    /* endpoint: GET /examples/passport/local */
    router.get('/local', function (req, res) {

        var vdata = {
            title: 'Supermean examples - passportJS local authentication',
            desc: 'Supermean example for passportJS.',
            keywords: 'supermean, mean stack, examples',
            static_files: config.static_files
        };

        res.render('examples/passport/local_form', vdata);
    });



    /* endpoint: GET /examples/passport/local/loginok */
    router.get('/local/loginok', function (req, res) {

        var vdata = {
            title: 'Supermean examples - passportJS local authentication',
            desc: 'Supermean example for passportJS.',
            keywords: 'supermean, mean stack, examples',
            static_files: config.static_files
        };

        res.render('examples/passport/local_login', vdata);
    });

};