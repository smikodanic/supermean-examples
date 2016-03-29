/**
 * /server/app/controllers/index.js
 */
require('rootpath');
var config = require('server/app/config/');

module.exports = function (router) {
    'use strict';

    /* endpoint: GET / */
    router.get('/', function (req, res) {

        var vdata = {
            title: 'Homepage',
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


    /* endpoint: GET /login */
    router.get('/login', function (req, res) {

        var vdata = {
            title: 'Login form',
            desc: 'Supermean login test.',
            keywords: 'key1, key2, key3',
            static_files: config.static_files,
            bodyText: 'Login text'
        };

        res.render('public/login', vdata);
    });


    /* 404 not found */
    router.get('/404', function (req, res) {
        res.status(404).render('404');
    });

    /* server side /example route has advantage over slient side /example route */
    // router.get('/example', function (req, res) {
    //     res.send('This is server side response to /example URL!');
    // });

};