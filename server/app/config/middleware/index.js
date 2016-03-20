/**
 * Include or exclude middlewares
 */

module.exports = function (app) {
    'use strict';
    require('./general')(app);
    require('./sessionexpress')(app);
};

