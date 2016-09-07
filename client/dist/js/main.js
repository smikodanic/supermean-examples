/*!
 * SuperMEAN v0.1.0 (http://www.supermean.org)
 * Copyright 2014-2016 Sasa Mikodanic
 * Licensed under MIT 
 */

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
 AngularJS v1.5.8
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(n,c){'use strict';function l(b,a,g){var d=g.baseHref(),k=b[0];return function(b,e,f){var g,h;f=f||{};h=f.expires;g=c.isDefined(f.path)?f.path:d;c.isUndefined(e)&&(h="Thu, 01 Jan 1970 00:00:00 GMT",e="");c.isString(h)&&(h=new Date(h));e=encodeURIComponent(b)+"="+encodeURIComponent(e);e=e+(g?";path="+g:"")+(f.domain?";domain="+f.domain:"");e+=h?";expires="+h.toUTCString():"";e+=f.secure?";secure":"";f=e.length+1;4096<f&&a.warn("Cookie '"+b+"' possibly not set or overflowed because it was too large ("+
f+" > 4096 bytes)!");k.cookie=e}}c.module("ngCookies",["ng"]).provider("$cookies",[function(){var b=this.defaults={};this.$get=["$$cookieReader","$$cookieWriter",function(a,g){return{get:function(d){return a()[d]},getObject:function(d){return(d=this.get(d))?c.fromJson(d):d},getAll:function(){return a()},put:function(d,a,m){g(d,a,m?c.extend({},b,m):b)},putObject:function(d,b,a){this.put(d,c.toJson(b),a)},remove:function(a,k){g(a,void 0,k?c.extend({},b,k):b)}}}]}]);c.module("ngCookies").factory("$cookieStore",
["$cookies",function(b){return{get:function(a){return b.getObject(a)},put:function(a,c){b.putObject(a,c)},remove:function(a){b.remove(a)}}}]);l.$inject=["$document","$log","$browser"];c.module("ngCookies").provider("$$cookieWriter",function(){this.$get=l})})(window,window.angular);


},{}],2:[function(require,module,exports){
/*global window*/

/**
 * Controller: 404Ctrl
 */
module.exports = function () {
    'use strict';
    //redirect to server side /server/views/404.ejs
    window.location.href = '/404';
};

},{}],3:[function(require,module,exports){
/**
 * Controller: examples-spa_listCtrl
 */
module.exports = function ($scope) {
    'use strict';

    console.log('A list of SPA Examples.');
};

},{}],4:[function(require,module,exports){
/**
 * Controller: pageCtrl
 */
module.exports = function ($scope, basicAuth, $state, $http, APPCONF) {
    'use strict';

    //show current state object
    // console.info('Current state \n', JSON.stringify($state.get($state.current.name), null, 2));

    /******** BASIC AUTHENTICATION ********/
    //click on login button
    $scope.basicLogin = function () {
        $scope.errMsg = '';

        basicAuth
            .login($scope.username, $scope.password, '/examples-spa/login/page1')
            .catch(function (err) {
                if (err.data) {
                    $scope.errMsg = err.data.message;
                    console.error(err.data.stack);
                } else {
                    $scope.errMsg = 'Bad API request: ' + APPCONF.API_BASE_URL + '/examples-spa/login/page1';
                }

            });

    };

    //request some protected data from API
    $scope.basicGetsomedata = function () {
        $http
            .get(APPCONF.API_BASE_URL + '/examples/auth/passport/basicstrategy/getsomedata')
            .then(function (res) {
                $scope.someData = res.data.data.msg;
                console.log('basicGetsomedata\n', JSON.stringify(res, null, 2));
            })
            .catch(function (err) {
                console.error(JSON.stringify(err, null, 2));
            });
    };

















    $scope.logout = function () {
        basicAuth.logout('/examples-spa/login/pageform');
    };

};

},{}],5:[function(require,module,exports){
/**
 * Controller: ListQcreationCtrl
 */
module.exports = function ($scope, $q, $timeout) {
    'use strict';

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
                $scope.$parent.resultOut = JSON.stringify(promis, null, 2);
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
                $scope.$parent.resultOut = JSON.stringify(promis, null, 2);
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
            $scope.$parent.resultOut = JSON.stringify(promis, null, 2);
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
                $scope.$parent.resultOut = JSON.stringify(promis, null, 2);
                // console.log(JSON.stringify(promis, null, 2));
            });
    };





























};

},{}],6:[function(require,module,exports){
/**
 * Controller: ListQmethodsCtrl
 */
module.exports = function ($scope, $q, $timeout) {
    'use strict';

    /* Method: all()
     * All promises must be fulfilled. Returned is array of resolved promises. If one promis is rejected catch() is executed instead of then().
     */
    $scope.method_all = function () {

        var promis1 = $q.resolve('PROMIS 1');
        var promis2 = $q.resolve('PROMIS 2');

        var promis = $q.all([promis1, promis2]);

        promis
            .then(function (data) {
                console.log(JSON.stringify(data, null, 2));
            })
            // .spread(function (val1, val2) { //spread will not work !!!
            //     console.log(val1 + val2);
            // })
            .catch(function (err) {
                console.log(err.stack);
            })
            .finally(function () {
                $scope.$parent.resultOut = promis;
            });

    };
/*
console:
[
  "PROMIS 1",
  "PROMIS 2"
]
 */



    /* Method: race() NOT WORKING!!!
     * Wait for the first promise to be resolved or rejected. Returned value is the vaue of that promise.
     */
    $scope.method_race = function () {

        var promisArr = [];

        promisArr[0] = $q(function (resolve, reject) {
            $timeout(function () {
                resolve('PROMIS 0 fulfilled!');
            }, 2000);
        });


        promisArr[1] = $q(function (resolve, reject) {
            $timeout(function () {
                reject(new Error('PROMIS 1 rejected!'));
            }, 4000);
        });


        $q.race(promisArr)
            .then(function (data) {
                console.log(JSON.stringify(data, null, 2));
            })
            .catch(function (err) {
                console.log(err.stack);
            })
            .finally(function () {
                $scope.$parent.resultOut = promis1;
            });

    };


    /* Method: then()
     * return value or throw error from then().
     *
     * Notice: catch() is not needed in Q as it is needed in Bluebird promises.
     */
    $scope.method_then = function () {

        var promis = $q.resolve('My PROMIS');

        promis
            .then(function (val1) {
                console.log(val1);
                return 'Something returned from then!'; //return value to next then()
            })
            .then(function (val2) {
                console.log(val2);
                var error = new Error('Something thrown from then!');
                throw error; //throws error
            });
            // .catch(function (err) {
            //     console.error(err.stack);
            // });

    };
























};

},{}],7:[function(require,module,exports){
/* Controller: 'StateControllerAliasCtrl' */
module.exports = function ($scope) {
    'use strict';
    $scope.myVar = 'Variable from $scope !'
};

},{}],8:[function(require,module,exports){
//application constants (configuration file)
module.exports = {

    API_BASE_URL: 'http://192.168.1.101:9005',
    // API_BASE_URL: 'http://localhost:9005'


};

},{}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
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
    $stateProvider.state('examples-spa_login', require('../routes-ui/examples-spa_login')); // url: /examples-spa/login
    $stateProvider.state('examples-spa_login_pageform', require('../routes-ui/examples-spa_login').pageform); // url: /examples-spa/login/pageform
    $stateProvider.state('examples-spa_login_page1', require('../routes-ui/examples-spa_login').page1); // url: /examples-spa/login/page1
    $stateProvider.state('examples-spa_login_page2', require('../routes-ui/examples-spa_login').page2); // url: /examples-spa/login/page2
    $stateProvider.state('examples-spa_login_page3', require('../routes-ui/examples-spa_login').page3); // url: /examples-spa/login/page3






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






},{"../routes-ui/404":15,"../routes-ui/examples-spa":16,"../routes-ui/examples-spa_login":17,"../routes-ui/examples-spa_q":18,"../routes-ui/examples-spa_uirouter":19}],11:[function(require,module,exports){
module.exports = function () {
    'use strict';

    var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

    return {
        encode: function (input) {
            var output = "";
            var chr1, chr2, chr3 = "";
            var enc1, enc2, enc3, enc4 = "";
            var i = 0;

            do {
                chr1 = input.charCodeAt(i++);
                chr2 = input.charCodeAt(i++);
                chr3 = input.charCodeAt(i++);

                enc1 = chr1 >> 2;
                enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                enc4 = chr3 & 63;

                if (isNaN(chr2)) {
                    enc3 = enc4 = 64;
                } else if (isNaN(chr3)) {
                    enc4 = 64;
                }

                output = output +
                    keyStr.charAt(enc1) +
                    keyStr.charAt(enc2) +
                    keyStr.charAt(enc3) +
                    keyStr.charAt(enc4);
                chr1 = chr2 = chr3 = "";
                enc1 = enc2 = enc3 = enc4 = "";
            } while (i < input.length);

            return output;
        },

        decode: function (input) {
            var output = "";
            var chr1, chr2, chr3 = "";
            var enc1, enc2, enc3, enc4 = "";
            var i = 0;

            // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
            var base64test = /[^A-Za-z0-9\+\/\=]/g;
            if (base64test.exec(input)) {
                console.error("There were invalid base64 characters in the input text.\n" +
                    "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" +
                    "Expect errors in decoding.");
            }
            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

            do {
                enc1 = keyStr.indexOf(input.charAt(i++));
                enc2 = keyStr.indexOf(input.charAt(i++));
                enc3 = keyStr.indexOf(input.charAt(i++));
                enc4 = keyStr.indexOf(input.charAt(i++));

                chr1 = (enc1 << 2) | (enc2 >> 4);
                chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                chr3 = ((enc3 & 3) << 6) | enc4;

                output = output + String.fromCharCode(chr1);

                if (enc3 != 64) {
                    output = output + String.fromCharCode(chr2);
                }
                if (enc4 != 64) {
                    output = output + String.fromCharCode(chr3);
                }

                chr1 = chr2 = chr3 = "";
                enc1 = enc2 = enc3 = enc4 = "";

            } while (i < input.length);

            return output;
        }
    };

};

},{}],12:[function(require,module,exports){
/**
 * Services for Basic Authentication
 *
 * Notice: $cookies require 'ngCookies' module to be included
 */

module.exports = function ($http, APPCONF, base64, $cookies, $location, $state, $timeout) {
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


    /**
     * Set 'obj' inside cookie.
     * @param {String} cookieKey - 'authAPI'
     * @param {Object} obj       - {"username": "john", "authHeader": "Basic am9objp0ZXN0"}
     */
    basicAuth.setCookie = function (cookieKey, obj) {
        $cookies.putObject(cookieKey, obj);
    };

    /**
     * Return object from cookie.
     * @param {String} cookieKey - 'authAPI'
     * @return {Object}          - {"username": "john", "authHeader": "Basic am9objp0ZXN0"} || {"username": "", "authHeader": ""}
     */
    basicAuth.getCookie = function (cookieKey) {
        var cookieObj = $cookies.getObject(cookieKey);

        if (cookieObj) {
            return cookieObj;
        } else {
            return {
                username: '',
                authHeader: ''
            };
        }
    };

    /**
     * Delete cookie, usually on logout.
     * @param {String} cookieKey - 'authAPI'
     */
    basicAuth.delCookie = function (cookieKey) {
        $cookies.remove(cookieKey);
    };


    /**
     * Logout and redirect to another page.
     * Use it in controller when user clicks on logout button.
     * @param  {String} redirectUrl -url after successful login
     * @return {Boolean} - returns true or false
     */
    basicAuth.logout = function (redirectUrl) {
        basicAuth.delCookie('authAPI');

        $timeout(function () {
            $location.path(redirectUrl);
        }, 34);
    };


    /**
     * Protect UI-router's state from unauthorized access.
     * Implement inside main.js run() method --> $rootScope.$on('$stateChangeSuccess', basicAuth.onstateChangeSuccess);
     * @param  {String} redirectUrl -url after successful login
     * @return {Boolean} - returns true or false
     */
    basicAuth.protectUIRouterState = function (event, toState, toParams, fromState, fromParams) {
        event.preventDefault();

        // console.log('authRequired: ', JSON.stringify($state.current.authRequired, null, 2));

        //check authentication if it's defined inside state with     authRequired: true
        //see '/routes-ui/examples-spa_login.js'
        if ($state.current.authRequired) {

            //redirect if 'authAPI' cookie doesn't exists
            if (!basicAuth.isAuthenticated()) {
                basicAuth.logout('/examples-spa/login/pageform');
            }

        }
    };



    /**
     * Determine if app is authenticated or not. E.g. if user is logged in or not.
     * Authenticated is when cookie 'authAPI' exists.
     * @return {Boolean} - returns true or false
     */
    basicAuth.isAuthenticated = function () {
        if (basicAuth.getCookie('authAPI')) {
            return !!basicAuth.getCookie('authAPI').username;
        } else {
            return false;
        }
    };




    return basicAuth;

};

},{}],13:[function(require,module,exports){
/**
 * API Request interceptor
 *
 * clientApp.factory('interceptApiRequest', require('./lib/factory/interceptApiRequest'));
 *
 * Notice: $injector is required to inject basicAuth, because config() accepts providers only not services.
 */

module.exports = function ($injector) {
    'use strict';

    var interceptApiRequest = {};

    /**
     * REQUEST INTERCEPTOR
     *
     * @param  {Object} config    - $http config parameter
     *     *** $http.get('/someUrl', config).then(successCallback, errorCallback);
     *     *** $http.post('/someUrl', data, config).then(successCallback, errorCallback);
     */
    interceptApiRequest.request = function (config) {
        var basicAuth = $injector.get('basicAuth'); //get basicAuth factory

        //Intercept with 'Authorization' header only when cookie is set, e.g. when user is logged in.
        //When user is not logged in don't add 'Authorization' header.
        if (basicAuth.getCookie('authAPI').authHeader) {
            config.headers['Authorization'] = basicAuth.getCookie('authAPI').authHeader; // 'Basic am9objp0ZXN0'
        }

        // console.log('$http config\n', JSON.stringify(config, null, 2));

        return config;
    };


    interceptApiRequest.requestError = function(config) {
        return config;
    },

    interceptApiRequest.response = function(res) {
        return res;
    },

    interceptApiRequest.responseError = function(res) {
        throw res;
    }





    return interceptApiRequest;

};

},{}],14:[function(require,module,exports){
/*global angular*/

/////BASIC AUTH MODULE
angular.module('smAuth', [])
    .controller('LoginCtrl', function ($scope) {
        'use strict';
        $scope.mojenesto = 'mojenesto';
    });

/******************* START APP AND LOAD MODULES *******************
 **********************************************/
require('../../bower_components/angular-cookies/angular-cookies.min.js');

var clientApp = angular.module('clientApp', [
    // 'ngRoute',
    'ui.router',
    'ngCookies',
    'smAuth'
]);



/**************************** CONSTANT **************************
 ****************************************************************/
clientApp.constant('APPCONF', require('./config/constAPPCONF'));
// clientApp.constant('myMATH', require('./config/constantsMath'));



/******************************************* CONFIG *******************************************
Only providers ($httpProvider) and constants can be injected into configuration blocks.
This is to prevent accidental instantiation of services before they have been fully configured.
 **********************************************************************************************/
clientApp.config(require('./config/html5mode'));

//protect API endpoints
clientApp.config(function ($httpProvider) {
    'use strict';
    $httpProvider.interceptors.push('interceptApiRequest');
});





/*********************************** RUN  ***********************************
Run on single page app start. For example on browser's reload.
Only instances ($http) and constants can be injected into run blocks.
This is to prevent further system configuration during application run time.
 ****************************************************************************/

//protect pages e.g. ui-router's states
clientApp.run(function ($rootScope, basicAuth) {
    'use strict';
    $rootScope.$on('$stateChangeSuccess', basicAuth.protectUIRouterState);
});





/****************************** ROUTES ******************************
 ********************************************************************/
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
clientApp.controller('ListQmethodsCtrl', require('./app/examples-spa/q/listQmethodsCtrl'));

//********* login examples
clientApp.controller('PageCtrl', require('./app/examples-spa/login/pageCtrl'));





/***************************** SERVICES ***************************
 ******************************************************************/
clientApp.factory('basicAuth', require('./lib/factory/basicAuth'));
clientApp.factory('base64', require('./lib/factory/base64'));
clientApp.factory('interceptApiRequest', require('./lib/factory/interceptApiRequest'));

},{"../../bower_components/angular-cookies/angular-cookies.min.js":1,"./app/_common/404/404Ctrl":2,"./app/examples-spa/listSPAexamplesCtrl":3,"./app/examples-spa/login/pageCtrl":4,"./app/examples-spa/q/listQcreationCtrl":5,"./app/examples-spa/q/listQmethodsCtrl":6,"./app/examples-spa/uirouter/stateControllerAliasCtrl":7,"./config/constAPPCONF":8,"./config/html5mode":9,"./config/routes-ui":10,"./lib/factory/base64":11,"./lib/factory/basicAuth":12,"./lib/factory/interceptApiRequest":13}],15:[function(require,module,exports){
module.exports = {
    url: '/404',
    templateUrl: '/client/dist/html/_common/404/404.html',
    controller: '404Ctrl'
};

},{}],16:[function(require,module,exports){
/* state: 'examples-spa'
 * url: /examples-spa
 ************************/
module.exports.list = {
    url: '/examples-spa',
    templateUrl: '/client/dist/html/examples-spa/listSPAexamples.html',
    controller: 'ListSPAexamplesCtrl'
};

},{}],17:[function(require,module,exports){
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
        authentication: function (basicAuth) {
            'use strict';
            if (!basicAuth.isAuthenticated()) {
                basicAuth.logout('/examples-spa/login/pageform');
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

    authRequired: true
};


/* state: 'examples-spa_login_page3'
 * url: /examples-spa/login/page3
 ***********************************/
module.exports.page3 = {
    url: '/examples-spa/login/page3',
    views: {
        '': {
            templateUrl: '/client/dist/html/examples-spa/login/page3.html',
            controller: 'PageCtrl'
        },
        'pagemenu@examples-spa_login_page3': {
            templateUrl: '/client/dist/html/examples-spa/login/_pagemenu.html'
        }
    },

    authRequired: false
};


},{}],18:[function(require,module,exports){
/* state: 'examples-spa_q'
 * url: /examples-spa/q
 ************************/
module.exports = {
    url: '/examples-spa/q',
    templateUrl: '/client/dist/html/examples-spa/q/listQ.html'
};


},{}],19:[function(require,module,exports){
/* state: 'examples-spa_uirouter'
 * url: /examples-spa/uirouter
 ************************/
module.exports.list = {
    url: '/examples-spa/uirouter',
    templateUrl: '/client/dist/html/examples-spa/uirouter/list.html'
};


},{}]},{},[14]);
