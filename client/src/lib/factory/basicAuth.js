/**
 * Services for Basic Authentication
 *
 * Notice: $cookies require 'ngCookies' module to be included
 */

module.exports = function ($http, $rootScope, APPCONF, base64, $cookies) {
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

        //create auth data to be stored in cookie
        $rootScope.authData = {
            username: u,
            header: http_config.headers.Authorization
        };


        return $http.get(APPCONF.API_BASE_URL + '/examples/auth/passport/basicstrategy', http_config);

    };


    basicAuth.setCookie = function (cookieKey, obj) {
        $cookies.putObject(cookieKey, obj);
    };

    basicAuth.getCookie = function (cookieKey) {
        return $cookies.getObject(cookieKey);
    };


    return basicAuth;

};
