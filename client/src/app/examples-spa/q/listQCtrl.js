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
