/**
 * Services for Basic Authentication
 */

module.exports = function ($http, APPCONF, base64) {
    'use strict';

    var basicAuth = {};

    /**
     * Send username and password to validate.
     * @param  {String} u - username
     * @param  {String} p -password
     * @return {Object}   - API object
     */
    basicAuth.sendCredentials = function (u, p) {

        //encoding
        var input = u + ':' + p;
        var input64 = base64.encode(input);

        //$http config
        var http_config = {
            headers: {
                Authorization: 'Basic ' + input64
            }
        };
        // console.log(JSON.stringify(http_config, null, 2));


        return $http.get(APPCONF.API_BASE_URL + '/examples/auth/passport/basicstrategy', http_config);

    };


    return basicAuth;

};
