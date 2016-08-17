/* Controller: stateprovider-state-basicCtrl*/
module.exports.basic = function ($scope) {
    'use strict';

    $scope.myVar = 'myVar from $scope !'
    console.log('stateprovider-state-basicCtrl works!!!');
};

/* Controller: stateprovider-state-resolveCtrl*/
module.exports.resolve = function ($scope, myResolvedVar1) {
    'use strict';

    $scope.myVar = myResolvedVar1;
    console.log(JSON.stringify(myResolvedVar1, null, 2));
};


/* Controller: stateprovider-state-viewsCtrl*/
module.exports.views = function ($scope) {
    'use strict';
    console.log('Multi View Page !!!');

};
