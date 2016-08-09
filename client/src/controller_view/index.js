module.exports = function (clientApp) {
    'use strict';
    require('./common/404/404Ctrl.js')(clientApp);

    require('./examples/exampleCtrl.js')(clientApp);
};
