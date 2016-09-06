/**
 * Services for Basic Authentication
 *
 * Notice: $cookies require 'ngCookies' module to be included
 */

module.exports = function ($http, APPCONF, base64, $cookies, $location) {
    'use strict';

    var basicAuth = {};

    /**
     * Check credentials (username, password) and set cookie if credentails are correct.
     * @param  {String} u - username
     * @param  {String} p -password
     * @param  {String} redirectUrl -url after successful login
     * @return {Object}   - API object
     */
    basicAuth.login = function (u, p, redirectUrl) {

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

        //delete cookie (on bad login old cookie will be deleted)
        basicAuth.delCookie('authAPI');

        return $http.get(APPCONF.API_BASE_URL + '/examples/auth/passport/basicstrategy', http_config)
            .then(function (respons) {
                if (respons.data.isSuccess) {
                    basicAuth.setCookie('authAPI', respons.data.putLocally);

                    //redirect to another page
                    if (redirectUrl) {
                        $location.path(redirectUrl);
                    }
                }
            });

    };


    basicAuth.setCookie = function (cookieKey, obj) {
        $cookies.putObject(cookieKey, obj);
    };

    basicAuth.getCookie = function (cookieKey) {
        return $cookies.getObject(cookieKey);
    };

    basicAuth.delCookie = function (cookieKey) {
        return $cookies.remove(cookieKey);
    };


    return basicAuth;

};
