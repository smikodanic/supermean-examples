/* state: 'examples-spa_login'
 * url: /examples-spa/login
 ************************/
module.exports = {
    url: '/examples-spa/login',
    templateUrl: '/client/dist/html/examples-spa/login/listLogin.html'
};

/* state: 'examples-spa_login_basic'
 * url: /examples-spa/login/basic
 ************************/
module.exports.basic = {
    url: '/examples-spa/login/basic',
    templateUrl: '/client/dist/html/examples-spa/login/loginForm.html',
    controller: 'BasicAuthCtrl'
};

