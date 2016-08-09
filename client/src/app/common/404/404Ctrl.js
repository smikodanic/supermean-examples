/*global window*/
module.exports = function (clientApp) {
    'use strict';
    clientApp.controller('404Ctrl', function () {
        //redirect to server side /server/views/404.ejs
        window.location.href = '/404';
    });
};