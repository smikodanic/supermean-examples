module.exports = function (clientApp) {
    'use strict';
    require('./common/404/404Ctrl.js')(clientApp);

    require('./example/exampleCtrl.js')(clientApp);
};