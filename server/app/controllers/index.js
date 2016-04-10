/**
 * /server/app/controllers/index.js
 */
var config = require('../config/');

module.exports = function (router) {
    'use strict';

    /* endpoint: GET / */
    router.get('/', function (req, res) {

        var vdata = {
            title: 'SuperMEAN - MEAN stack',
            desc: 'Some Description of homepage.',
            keywords: 'key1, key2, key3',
            static_files: config.static_files,
            bodyText: ['one', 2, 'three']
        };

        //one page app static files
        vdata.static_files.angularApp = {
            dir: 'indexApp'

        };

        res.render('public/index', vdata);
    });

    /* endpoint: GET /test */
    router.get('test', function (req, res) {
        res.send('This is TEST!');
    });


    /* 404 not found */
    router.get('/404', function (req, res) {
        res.status(404).render('error404');
    });

};