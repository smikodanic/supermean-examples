/* state: 'examples-spa_uirouter'
 * url: /examples-spa/uirouter
 ************************/
module.exports.list = {
    url: '/examples-spa/uirouter',
    templateUrl: '/client/dist/html/examples-spa/uirouter/list.html'
};

/* state: 'examples-spa_uirouter_urlrouteprovider-when2'
 * url: /examples-spa/uirouter/urlrouteprovider-when2
 ************************/
module.exports.urlrouteprovider_when2 = {
    url: '/examples-spa/uirouter/urlrouteprovider-when2',
    template: 'Template comes from stateProvider!'
};

/* state: 'examples-spa_uirouter_urlrouteprovider-rule'
 * url: /examples-spa/uirouter/urlrouteprovider-rule
 ************************/
module.exports.urlrouteprovider_rule = {
    url: '/examples-spa/uirouter/urlrouteprovider-rule',
    template: 'Can use uppercase or lowercase letters in URL! Click on this: <a href="/examples-spa/uirouter/urlrouteprovider-RULE">/examples-spa/uirouter/urlrouteprovider-RULE</a> will not change anything.'
};
