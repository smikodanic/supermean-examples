/**
 * Validate strings
 *
 * ****** Caution: Returned value must be Boolean !
 */

/**
 * String must have from 5 characters and above.
 * @param  {String} str - string to be validated
 * @return {Boolean}    - returned value must be Boolean
 */
module.exports.fromStrLength = function (str) {
    'use strict';
    return str.length > 5;
};



/**
 * String 'str' must have less the 'len' characters.
 * @param  {String} str - string to be validated
 * @return {Boolean}    - returned value must be Boolean
 */
module.exports.toStrLength = function (len) {
    'use strict';

    //a validation function will be returned
    return function (str) {
        return str.length < len;
    };
};
