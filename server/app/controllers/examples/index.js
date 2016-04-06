/**
 * /server/app/controllers/examples/index.js
 */
require('rootpath');
var config = require('server/app/config/');

module.exports = function (router) {
    'use strict';

    /* endpoint: GET /examples */
    router.get('/', function (req, res) {

        var vdata = {
            title: 'Supermean examples',
            desc: 'A list of supermean examples.',
            keywords: 'supermean, mean stack, examples',
            static_files: config.static_files
        };

        res.render('examples/index', vdata);
    });

};