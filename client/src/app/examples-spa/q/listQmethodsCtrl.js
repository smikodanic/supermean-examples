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
