/**
 * Controller: ScopeParentCtrl
 *
 * Used in scope: examples as a parent scope.
 */
module.exports = function ($scope) {
    'use strict';

    $scope.parentScopeVar = 'Parent scope var from "ScopeParentCtrl" !';

    $scope.alertMe = function (msg) {
        alert(msg);
    };


};
