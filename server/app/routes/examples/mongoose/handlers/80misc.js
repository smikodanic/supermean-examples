/**
 * GET /examples/mongoose/80misc...
 */

require('rootpath')();
var misc_model = require('server/app/models/examples/misc');
var errorsLib = require('server/app/lib/errorsLib');

//mongoose promisification
var Bpromise = require('bluebird');
Bpromise.promisifyAll(require('mongoose'));


/****************************************************
* GET /examples/mongoose/80misc-fillcollection *
*****************************************************
* Fillcollection before testings. */
module.exports.fillcollection = function (req, res, next) {
    'use strict';

    var docsInput = [
        {
            str: 'string 1',
            num: 15,
            my_id:'577fde18ea79fe632b75c001',
            obj: {
                bul: true,
                arr_str: ['jen', 'dva', 'tri'],
                arr_num: [5, 8, 13]
            },
            mix: [{jen: 1}, {jen: 'one'}]
        },
        {
            str: 'string 2',
            num: 15,
            my_id: '577fde18ea79fe632b75c002',
            obj: {
                bul: true,
                arr_str: ['jena', 'dvaa', 'tria'],
                arr_num: [5, 8, 13]
            },
            mix: [{jen: 2}, {jen: 'twoo'}]
        },
        {
            str: 'string 3',
            num: 15,
            my_id: '577fde18ea79fe632b75c003',
            obj: {
                bul: true,
                arr_str: ['jenb', 'dvab', 'trib'],
                arr_num: [51, 81, 131]
            },
            mix: [{jen: 3}, {jen: 'three'}]
        }
    ];

    misc_model.fillCollection(docsInput)
        .then(function (insDocs) {
            console.log('Collection is filled: \n' + JSON.stringify(insDocs, null, 2));
            res.send('Collection is filled: <pre>' + JSON.stringify(insDocs, null, 2) + '</pre>');
        })
        .catch(function (err) {
            err.status = err.status || 500;
            errorsLib.onErrorCatch(err, res);
        });
};



/*****************************************************
* GET /examples/mongoose/80misc-lean              *
******************************************************/
module.exports.lean = function (req, res, next) {
    'use strict';


    misc_model.lean()
        .then(function (docSaved) {
            console.log('Saved doc: \n' + JSON.stringify(docSaved, null, 2));
            res.send('Saved doc: <pre>' + JSON.stringify(docSaved, null, 2) + '</pre>');
        })
        .catch(function (err) {
            err.status = err.status || 500;
            errorsLib.onErrorCatch(err, res);
        });

};




/*****************************************************
* GET /examples/mongoose/80misc-tojson               *
******************************************************/
module.exports.tojson = function (req, res, next) {
    'use strict';


    misc_model.toJson()
        .then(function (result) {
            console.log('Result: \n' + JSON.stringify(result, null, 2));
            res.send('Result: <pre>' + JSON.stringify(result, null, 2) + '</pre>');
        })
        .catch(function (err) {
            err.status = err.status || 500;
            errorsLib.onErrorCatch(err, res);
        });

};


/*****************************************************
* GET /examples/mongoose/80misc-toobject               *
******************************************************/
module.exports.toobject = function (req, res, next) {
    'use strict';


    misc_model.toObj()
        .then(function (result) {
            console.log('Result: \n' + JSON.stringify(result, null, 2));
            res.send('Result: <pre>' + JSON.stringify(result, null, 2) + '</pre>');
        })
        .catch(function (err) {
            err.status = err.status || 500;
            errorsLib.onErrorCatch(err, res);
        });

};


/*****************************************************
* GET /examples/mongoose/80misc-tostring               *
******************************************************/
module.exports.tostring = function (req, res, next) {
    'use strict';


    misc_model.toStr()
        .then(function (result) {
            console.log('Result: \n' + JSON.stringify(result, null, 2));
            res.send('Result: <pre>' + JSON.stringify(result, null, 2) + '</pre>');
        })
        .catch(function (err) {
            err.status = err.status || 500;
            errorsLib.onErrorCatch(err, res);
        });

};

