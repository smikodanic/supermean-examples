/* state: 'examples-spa_login'
 * url: /examples-spa/login
 ************************/
module.exports = {
    url: '/examples-spa/login',
    templateUrl: '/client/dist/html/examples-spa/login/listLogin.html'
};

/* state: 'examples-spa_login_pageform'
 * url: /examples-spa/login/pageform
 ************************/
module.exports.pageform = {
    url: '/examples-spa/login/pageform',
    views: {
        '': {
            templateUrl: '/client/dist/html/examples-spa/login/pageform.html',
            controller: 'PageCtrl'
        },
        'pagemenu@examples-spa_login_pageform': {
            templateUrl: '/client/dist/html/examples-spa/login/_pagemenu.html'
        }
    }
};

/* state: 'examples-spa_login_page1'
 * url: /examples-spa/login/page1
 *
 * Authentication solved with resolve property.
 ************************/
module.exports.page1 = {
    url: '/examples-spa/login/page1',
    views: {
        '': {
            templateUrl: '/client/dist/html/examples-spa/login/page1.html',
            controller: 'PageCtrl'
        },
        'pagemenu@examples-spa_login_page1': {
            templateUrl: '/client/dist/html/examples-spa/login/_pagemenu.html'
        }
    },

    resolve: {
        authentication: function (basicAuth, $timeout) {
            'use strict';
            if (!basicAuth.isAuthenticated()) {
                $timeout(function () {
                    basicAuth.logout('/examples-spa/login/pageform');
                    // $state.go('examples-spa_login_pageform'); //or use this
                }, 0);
            }
        }
    }
};


/* state: 'examples-spa_login_page2'
 * url: /examples-spa/login/page2
 *
 * Authentication solved with     authenticationRequired: true
 ************************/
module.exports.page2 = {
    url: '/examples-spa/login/page2',
    views: {
        '': {
            templateUrl: '/client/dist/html/examples-spa/login/page2.html',
            controller: 'PageCtrl'
        },
        'pagemenu@examples-spa_login_page2': {
            templateUrl: '/client/dist/html/examples-spa/login/_pagemenu.html'
        }
    },

    authenticationRequired: true
};

