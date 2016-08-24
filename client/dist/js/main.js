/*!
 * SuperMEAN v0.1.0 (http://www.supermean.org)
 * Copyright 2014-2016 Sasa Mikodanic
 * Licensed under MIT 
 */

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*global window*/

/**
 * Controller: 404Ctrl
 */
module.exports = function () {
    'use strict';
    //redirect to server side /server/views/404.ejs
    window.location.href = '/404';
};

},{}],2:[function(require,module,exports){
/**
 * Controller: examples-spa_listCtrl
 */
module.exports = function ($scope) {
    'use strict';

    console.log('A list of SPA Examples.');
};

},{}],3:[function(require,module,exports){
/**
 * Controller: examples-spa_listCtrl
 */
module.exports = function ($scope, $q, $timeout) {
    'use strict';

    console.log('A list of Q Examples.');

    /*
     * Create $q promise with $q(function (resolve, reject) {...})
     */
    $scope.creationResolver = function () {
        // var x = 5; //resolved
        var x = 15; //rejected

        //promise created with resolver function
        var promis = $q(function (resolve, reject) {
            if (x < 10) {
                resolve(x);
            } else {
                var reason = new Error('x is greater then 10!');
                reject(reason);
            }
        });

        promis
            .then(function (data) {
                console.log(data);
            })
            .catch(function (err) {
                console.error(err.stack);
            })
            .finally(function () {
                $scope.resultOut = JSON.stringify(promis, null, 2);
                // console.log(JSON.stringify(promis, null, 2));
            });


        //This will also work!!!
        // promis.then(function (data) {
        //     console.log(data);
        // }, function (err) {
        //     console.error(err.stack);
        // });

    };



    /*
     * Create $q promise with $q.defer();
     */
    $scope.creationDefer = function () {
        // var x = 5; //resolved
        var x = 15; //rejected

        var def = $q.defer();

        if (x < 10) {
            def.resolve(x);
        } else {
            var reason = new Error('x is greater then 10!');
            def.reject(reason);
        }

        var promis = def.promise;

        //used ES6 arrow functions
        promis
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.error(err.stack);
            })
            .finally(() => {
                $scope.resultOut = JSON.stringify(promis, null, 2);
                // console.log(JSON.stringify(promis, null, 2));
            });

    };


    /* progress bar example.
     * Usage of def.notify();
     */

    $scope.creationDeferNotify = function () {

        var def = $q.defer();

        $scope.progressPerct = '0%';
        let i = 1;
        var intervalID = setInterval(function () {
            def.notify('Promise is in pending state! Not resolved nor rejected: ' + i);
            var prog = parseInt(((700 * i * 100) / 2100), 10);
            i++;
            $scope.progressPerct = prog + '%';
        }, 700);

        $timeout(function () {
            def.resolve('Promise resolved!!!');
            // def.reject(new Error('Promise rejected!!!'));
        }, 2200);

        var promis = def.promise;

        promis.then(function (data) {
            console.log(data);
        }, function (err) {
            console.error(err.stack);
        }, function (notif) {
            console.log(notif, $scope.progressPerct);
        }).finally(function () {
            console.log('Timer closed! intervalId=' + JSON.stringify(intervalID, null, 2));
            clearInterval(intervalID);
            $scope.resultOut = JSON.stringify(promis, null, 2);
        });

        // .progress() will not work !!!
        // promis
        //     .progress(function (notif) {
        //         console.log(notif);
        //     })
        //     .then(function (data) {
        //         console.log(data);
        //     })
        //     .catch(function (err) {
        //         console.error(err.stack);
        //     })
        //     .finally(function () {
        //         $scope.resultOut = JSON.stringify(promis, null, 2);
        //         // console.log(JSON.stringify(promis, null, 2));
        //     });

    };


    /*
     * Create $q promise directly with $q.resolve() or $q.reject()
     */
    $scope.creationResolveReject = function () {
        // var promis = $q.resolve('Something resolved');
        var promis = $q.reject(new Error('Something rejected'));

        promis
            .then(function (data) {
                console.log(data);
            })
            .catch(function (err) {
                console.error(err.stack); //err.name | err.message
            })
            .finally(function () {
                $scope.resultOut = JSON.stringify(promis, null, 2);
                // console.log(JSON.stringify(promis, null, 2));
            });
    };





























};

},{}],4:[function(require,module,exports){
/* Controller: 'StateControllerAliasCtrl' */
module.exports = function ($scope) {
    'use strict';
    $scope.myVar = 'Variable from $scope !'
};

},{}],5:[function(require,module,exports){
//application constants (configuration file)
module.exports = {

    API_BASE_URL: 'http://uniapi.com'


};

},{}],6:[function(require,module,exports){
/**
 * $location in HTML5 mode
 *
 * IMPORTANT:
 * Dont forget <base> tag! (https://docs.angularjs.org/error/$location/nobase)
 */

module.exports = function ($locationProvider) {
    'use strict';
    /* three modes defined */
    $locationProvider.html5Mode(true); //http://localhost:3000/example
    // $locationProvider.html5Mode(false).hashPrefix('!'); //http://localhost:3000/something#!/example
    // $locationProvider.html5Mode(false); //http://localhost:3000/something#/example
};

},{}],7:[function(require,module,exports){
/*global window*/
/**
 * App routes defined by ui-router.
 * https://github.com/angular-ui/ui-router
 *
 * Must have <script src="/bower/angular-ui-router/release/angular-ui-router.min.js"></script> included in /server/app/views/clientApp.ejs.
 */


module.exports = function ($stateProvider, $urlRouterProvider) {
    'use strict';

    /* ROUTES
     * Fetch with <a href="">
     * https://docs.angularjs.org/api/ngRoute/provider/$routeProvider
     * https://angular-ui.github.io/ui-router/site/#/api/ui.router.router.$urlRouterProvider
     */
    $urlRouterProvider.when("/", function () {window.location.href = '/';}); //go to server-side
    $urlRouterProvider.when("/examples", function () {window.location.href = '/examples';}); //go to server-side
    $urlRouterProvider.otherwise("/404");
    $stateProvider.state('404', require('../routes-ui/404'));


    /* STATES
     * https://angular-ui.github.io/ui-router/site/#/api/ui.router.state.$stateProvider
     */
    $stateProvider.state('examples-spa', require('../routes-ui/examples-spa').list); // url: /examples-spa
    $stateProvider.state('examples-spa_uirouter', require('../routes-ui/examples-spa_uirouter').list); // url: /examples-spa/uirouter
    $stateProvider.state('examples-spa_qa', require('../routes-ui/examples-spa_q')); // url: /examples-spa/q






    /**************************************************************************************
     ********************************* UI-ROUTER EXAMPLES *********************************
     **************************************************************************************/



    /******* $stateProvider examples ************
     ********************************************/

    // template: -for inline HTML template
    //// uri: /examples-spa/uirouter/statetemplate
    $stateProvider.state('examples-spa_uirouter_stateTemplate', {
        url: '/examples-spa/uirouter/statetemplate',
        template: 'The simplest example with <b style="color:green">template:</b> .'
    });

    // templateUrl: -for HTML file template
    //// uri: /examples-spa/uirouter/statetemplateurl
    $stateProvider.state('examples-spa_uirouter_stateTemplateurl', {
        url: '/examples-spa/uirouter/statetemplateurl',
        templateUrl: '/client/dist/html/examples-spa/uirouter/stateTemplateurl.html'
    });

    // templateProvider: -enables service injection for defining template
    //// uri: http://localhost:3005/examples-spa/uirouter/statetemplateprovider/15?myQuery=Nešto čćžšđ
    $stateProvider.state('examples-spa_uirouter_stateTemplateprovider', {
        url: '/examples-spa/uirouter/statetemplateprovider/:myParam?myQuery',
        templateProvider: function ($timeout, $stateParams) {
            console.log('templateProvider starting ...');
            return $timeout(function () {
                return '<h1>myParam = ' + $stateParams.myParam + '</h1>' + '<h2>myQuery = ' + $stateParams.myQuery + '</h2>';
            }, 3000);
        }
    });


    // controller: function () {...}
    //// uri: /examples-spa/uirouter/state-controllerfunction
    $stateProvider.state('examples-spa_uirouter_stateControllerfunction', {
        url: '/examples-spa/uirouter/statecontrollerfunction',
        template: 'Open console to see result!',
        controller: function ($timeout) { //inject service as argument
            $timeout(function () {
                console.log('Something after 2,1 second.');
            }, 2100);
        }
    });

    // controller: 'SomeCtrl'
    //// uri: /examples-spa/uirouter/state-controlleralias
    $stateProvider.state('examples-spa_uirouter_stateControlleralias', {
        url: '/examples-spa/uirouter/statecontrolleralias',
        templateUrl: '/client/dist/html/examples-spa/uirouter/stateControllerAlias.html',
        controller: 'StateControllerAliasCtrl'
    });

    // controllerProvider:
    //// uri: /examples-spa/uirouter/state-controlleralias
    $stateProvider.state('examples-spa_uirouter_stateControllerProvider', {
        url: '/examples-spa/uirouter/statecontrollerprovider/:ctrlString',
        template: 'myVar: {{myVar}}',
        controllerProvider: function ($stateParams) {//only service can be injected. $scope cannot be injected here!!!
            return $stateParams.ctrlString;
        }
    });

    // url: (regular expession)
    //// uri: /examples-spa/uirouter/stateurlregex
    $stateProvider.state('examples-spa_uirouter_stateUrlregex', {
        url: '/examples-spa/uirouter/stateurlregex/{bookSlug:[a-z-]+}',
        template: 'url: "/examples-spa/uirouter/stateurlregex/{bookSlug:[a-z-]+" <br> This will not work because of number: <a href="/examples-spa/uirouter/stateurlregex/book2">/examples-spa/uirouter/stateurlregex/book2</a>'
    });

    // url: (int url params)
    //// uri: /examples-spa/uirouter/stateurlint/325
    $stateProvider.state('examples-spa_uirouter_stateUrlint', {
        url: '/examples-spa/uirouter/stateurlint/{myParam: int}',
        template: 'myPar = {{myPar}} <br>(This accepts integer parameter only, so this <a href="/examples-spa/uirouter/stateurlint/325abc">/examples-spa/uirouter/stateurlint/325abc</a> will not work!',
        controller: function ($scope, $stateParams) {
            $scope.myPar = $stateParams.myParam;
        }
    });

    // url: (string url params)
    //// uri: /examples-spa/uirouter/stateurlint/someString
    $stateProvider.state('examples-spa_uirouter_stateUrlstring', {
        url: '/examples-spa/uirouter/stateurlstring/{myParam: string}',
        template: 'myPar = {{myPar}} <br>(This accepts string parameter only, but this <a href="/examples-spa/uirouter/stateurlstring/325">/examples-spa/uirouter/stateurlstring/325</a> will also work!',
        controller: function ($scope, $stateParams) {
            $scope.myPar = $stateParams.myParam;
        }
    });

    // url: (date url params)
    //// uri: /examples-spa/uirouter/stateurlint/someString
    $stateProvider.state('examples-spa_uirouter_stateUrldate', {
        url: '/examples-spa/uirouter/stateurldate/{myParam: date}',
        template: 'myPar = {{myPar}} <br>(This accepts date parameter only, so this <a href="/examples-spa/uirouter/stateurldate/325">/examples-spa/uirouter/stateurldate/325</a> will not work!',
        controller: function ($scope, $stateParams) {
            $scope.myPar = $stateParams.myParam;
        }
    });


    // resolve: (resolve injectable service)
    //// uri: /examples-spa/uirouter/stateresolve
    $stateProvider.state('examples-spa_uirouter_stateResolve', {
        url: '/examples-spa/uirouter/stateresolve',
        template: 'myResolv = {{myResolv}} <br> delay(sec): {{td}}',
        controller: function ($scope, myResolved1, timeDelay) {
            $scope.myResolv = myResolved1;
            $scope.td = timeDelay;
        },
        resolve: {
            timeDelay: function () {
                return 1300;
            },
            myResolved1: function ($timeout, timeDelay) {
                return $timeout(function () {
                    return 'Something resolved!!!';
                }, timeDelay);
            }
        }

    });


    // data:
    //// uri: /examples-spa/uirouter/statedata
    $stateProvider.state('examples-spa_uirouter_stateData', {
        url: '/examples-spa/uirouter/statedata',
        template: 'myDataProperty = {{myDataProperty}}',
        controller: function ($scope, $state) {
            $scope.myDataProperty = $state.current.data.myData;
        },
        data: {
            myData: 'Something from data: object!!!'
        }
    });

    // params:
    //// uri: /examples-spa/uirouter/stateparams
    $stateProvider.state('examples-spa_uirouter_stateParams', {
        url: '/examples-spa/uirouter/stateparams',
        template: 'myPar = {{myPar}}',
        controller: function ($scope, $stateParams) {
            $scope.myPar = $stateParams.myParam;
        },
        params: {
            myParam: {value: 'My Default Value!!!'}
            // myParam: 'My Default Value!!!' //shorted
        }
    });

    // views:
    //// uri: /examples-spa/uirouter/stateviews
    $stateProvider.state('examples-spa_uirouter_stateViews', {
        url: '/examples-spa/uirouter/stateviews',
        views: {
            '': { // the main template will be placed here (relatively named)
                template: '<div ui-view="myView1"></div>'
            },
            'myView1@examples-spa_uirouter_stateViews': { // the child views will be defined here (absolutely named)
                template: 'From <b>myView1@examples-spa_uirouter_stateViews</b>! (Will appear when state "examples-spa_uirouter_stateViews" is active)'
            }
        }
    });

    // Nested States: simple parent-child example
    //// parent uri: /examples-spa/uirouter/stateviewsparent
    //// child uri: /examples-spa/uirouter/stateviewsparent/mychild
    $stateProvider
        .state('myParent', {
            url: '/examples-spa/uirouter/stateviewsparent',
            template: '<h2>myParent state</h2> <div ui-view></div>'
        })
        .state('myParent.myChild', {
            url: '/mychild', //will be added and final result is: /examples-spa/uirouter/stateviewsparent/mychild
            // url: '^/mychild', // http://localhost:3005/mychild
            template: '<h4>myChild state</h4>'
        });

    // Nested States: complex parent-child example with named views
    //// uri: /examples-spa/uirouter/stateviewsparent2
    //// uri: /examples-spa/uirouter/stateviewsparent2/mychild
    $stateProvider
        .state('myParent2', {
            url: '/examples-spa/uirouter/stateviewsparent2',
            template: '<h2>myParent2 state</h2> <h4 ui-view="myHead"></h4> <div ui-view></div>'
        })
        .state('myParent2.myChild', {
            url: '/mychild', // /examples-spa/uirouter/stateviewsparent2/mychild
            views: {
                'myHead@myParent2': {
                    template: 'myChild2 state'
                },
                '@myParent2': {
                    template: '<p>Some paragraph text !!!</p>'
                }
            }
        });

    // parent:
    //// uri: /examples-spa/uirouter/stateviewsparentchild
    $stateProvider
        .state('myParent3', {
            url: '/examples-spa/uirouter/stateviewsparent3',
            template: '<h2>myParent3 state</h2> <div ui-view></div>'
        })
        .state('myChild3', {
            parent: 'myParent3',
            url: '/mychild3',
            template: '<h4>myChild3 state</h4> Parent state defined by <b>parent:</b> <div style="color:red" ui-view></div>'
        })
        .state('myChild3.myGrandChild', {
            url: '/mygrandchild',
            template: 'myGrandChild state'
        });





    /******* $state examples ********
     ********************************/
    // .go()
    $stateProvider
        .state('sR', {
            url: '/examples-spa/uirouter/statego-root',
            template: '<h2>state Root</h2> <div ui-view></div>'
        })
        .state('sR.s1', {
            url: '/s1',
            template: 'state: s1 <div ui-view></div>'
        })
        .state('sR.s1.s11', {
            url: '/s11',
            template: 'state s11'
        })
        .state('sR.s1.s12', {
            url: '/s12',
            template: 'state s12  <div ui-view></div>',
            controller: function ($state) {
                // $state.go('.s121'); //go to sR.s1.s12.s121
                // $state.go('sR.s1.s11'); //go to sR.s1.s11
                $state.go('^.^.s1.s11'); //go to sR.s1.s11
            }
        })
        .state('sR.s1.s12.s121', {
            url: '/s121',
            template: 'state s121'
        });

    //.get()
    $stateProvider
        .state('stateGet', {
            url: '/examples-spa/uirouter/stateget',
            template: '<h2>state.get(\'stateGet\')</h2> {{getData}}',
            controller: function ($scope, $state) {
                $scope.getData = $state.get('stateGet');
                console.log(JSON.stringify($scope.getData, null, 2));
            }
        });

    //.href()
    $stateProvider
        .state('stateHref', {
            url: '/examples-spa/uirouter/statehref/{myParam}/:broj',
            template: '<h2>state.href(\'stateHref\')</h2> <a href="{{hrefData}}">{{hrefData}}</a>',
            controller: function ($scope, $state) {
                $scope.hrefData = $state.href('stateHref', {broj: 23}); // /23 will be aded to current url
                console.log(JSON.stringify($scope.hrefData, null, 2));
            }
        });

    //properties
    //.href()
    $stateProvider
        .state('stateProps', {
            url: '/examples-spa/uirouter/stateprops/{myId: int}',
            template: '<h2>$state.params &amp; $state.current</h2> Open console!',
            controller: function ($state, $stateParams) {
                console.info('$state.params\n' + JSON.stringify($state.params, null, 2));
                console.info('$state.current\n' + JSON.stringify($state.current, null, 2));
                console.info('$stateParams\n' + JSON.stringify($stateParams, null, 2));
            }
        });





    /******* $urlRouterProvider examples ********
     ********************************************/

    // When url in browser's addres bar is '/examples-spa/uirouter/urlrouteprovider-when1' console.log() will be executed
    $urlRouterProvider.when('/examples-spa/uirouter/urlrouteprovider-when1', function () {
        document.write('Open console!!!');
        console.log('#1 --- From $urlRouterProvider.when() handler!');
    });

    // When url is '/examples-spa/uirouter/urlrouteprovider-when2' $state.go() redirects to state.
    $urlRouterProvider.when('/examples-spa/uirouter/urlrouteprovider-when2', function ($state) {
        $state.go('examples-spa_uirouter_urlrouteprovider-when2'); //redirect to state provider and load template
        console.log('#2 --- From $urlRouterProvider.when() handler!');
    });
    $stateProvider.state('examples-spa_uirouter_urlrouteprovider-when2', {
        url: '/examples-spa/uirouter/urlrouteprovider-when2',
        template: 'Template comes from stateProvider after appling $state.go() in $urlRouterProvider!'
    });

    $urlRouterProvider.rule(function ($injector, $location) { //enables case insensitive URLs (in browser address bar you can enter upper or lower case letters. no matter)
        var path = $location.path();
        var normalized = path.toLowerCase();

        if (path !== normalized) {
            console.log("Lowercasing rule is applied!");
            return normalized;
        }
        return null;
    });
    $stateProvider.state('examples-spa_uirouter_urlrouteprovider-rule', {
        url: '/examples-spa/uirouter/urlrouteprovider-rule',
        template: 'Can use uppercase or lowercase letters in URL! Click on this: <a href="/examples-spa/uirouter/urlrouteprovider-RULE">/examples-spa/uirouter/urlrouteprovider-RULE</a> will not change anything.'
    });














};






},{"../routes-ui/404":9,"../routes-ui/examples-spa":10,"../routes-ui/examples-spa_q":11,"../routes-ui/examples-spa_uirouter":12}],8:[function(require,module,exports){
/*global angular*/
var clientApp = angular.module('clientApp', [
    // 'ngRoute',
    'ui.router'
]);


/******************* CONFIG *******************
 **********************************************/
clientApp.constant('APPCONF', require('./config/constants'));
clientApp.config(require('./config/html5mode'));


/******************* ROUTES *******************
 **********************************************/
// clientApp.config(['$routeProvider', require('./config/routes-ng')]);
clientApp.config(require('./config/routes-ui'));



/******************* CONTROLLERS *******************
 ***************************************************/
clientApp.controller('404Ctrl', require('./app/_common/404/404Ctrl'));
clientApp.controller('ListSPAexamplesCtrl', require('./app/examples-spa/listSPAexamplesCtrl'));

//********* ui-router examples
clientApp.controller('StateControllerAliasCtrl', require('./app/examples-spa/uirouter/stateControllerAliasCtrl'));

//********* $q promise examples
clientApp.controller('ListQcreationCtrl', require('./app/examples-spa/q/listQcreationCtrl'));


},{"./app/_common/404/404Ctrl":1,"./app/examples-spa/listSPAexamplesCtrl":2,"./app/examples-spa/q/listQcreationCtrl":3,"./app/examples-spa/uirouter/stateControllerAliasCtrl":4,"./config/constants":5,"./config/html5mode":6,"./config/routes-ui":7}],9:[function(require,module,exports){
module.exports = {
    url: '/404',
    templateUrl: '/client/dist/html/_common/404/404.html',
    controller: '404Ctrl'
};

},{}],10:[function(require,module,exports){
/* state: 'examples-spa'
 * url: /examples-spa
 ************************/
module.exports.list = {
    url: '/examples-spa',
    templateUrl: '/client/dist/html/examples-spa/listSPAexamples.html',
    controller: 'ListSPAexamplesCtrl'
};

},{}],11:[function(require,module,exports){
/* state: 'examples-spa_q'
 * url: /examples-spa/q
 ************************/
module.exports = {
    url: '/examples-spa/q',
    templateUrl: '/client/dist/html/examples-spa/q/listQ.html'
};


},{}],12:[function(require,module,exports){
/* state: 'examples-spa_uirouter'
 * url: /examples-spa/uirouter
 ************************/
module.exports.list = {
    url: '/examples-spa/uirouter',
    templateUrl: '/client/dist/html/examples-spa/uirouter/list.html'
};


},{}]},{},[8]);
