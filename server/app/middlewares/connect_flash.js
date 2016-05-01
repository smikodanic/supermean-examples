/* https://github.com/jaredhanson/connect-flash
* Use connect-flash to flash messages stored in session.
* The message is retreived by req.flash('error') and after that the error is deleted from req.flash.
*/

var flash = require('connect-flash');

module.exports = function (app) {
    'use strict';
    app.use(flash());
};
