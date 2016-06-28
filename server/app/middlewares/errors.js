/**
 * Show errors in browser window
 */

module.exports = function (app, config) {
    'use strict';
    app.use(function (err, req, res, next) {

        var errOut;
        if (config.env.name === 'dev') {
            errOut = err;
        } else {
            errOut = '';
        }

        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: errOut
        });
    });
};
