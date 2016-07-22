/**
 * GET /examples/mongoose/02schemaoptions-getset
 *
 * *** schema option: get & set
 * get: modifying value which comes from mongodb
 * set: modifying value which will go into mongodb
 */
require('rootpath')();
var SchemaoptionsGetSetModel = require('server/app/models/examples/schemaoptionsGetSet');
var errorsLib = require('server/app/lib/errorsLib');


module.exports = function (req, res, next) {
    'use strict';

    var docInput = {
        str_set: 'Some string which will be uppercased and inserted into mongodb',
        str_get: 'SOME STRING'
    };

    //insert doc
    SchemaoptionsGetSetModel

        //inserting (setter)
        .saveDocAsync(docInput)
        .then((data) => {
            console.log('Inserted data after schema setter is applied: \n' + JSON.stringify(data, null, 2));
            return data._id;
        })

        //selecting (getter)
        .then((getset_id) => {
            var selectBP = SchemaoptionsGetSetModel.findByIdAsync(getset_id);

            return selectBP
                .then((val) => {
                    console.log('Outputed data after schema getter is applied \n' + JSON.stringify(val, null, 2));
                    res.send('Outputed data after schema getter is applied <br> <pre>' + JSON.stringify(val, null, 2) + '</pre>');
                })
                .catch(err => {
                    err.status = err.status || 500;
                    errorsLib.onErrorCatch(err, res);
                });
        })

        .catch(err => {
            err.status = err.status || 500;
            errorsLib.onErrorCatch(err, res);
        });

};


/*
Browser window:
{
  "_id": "57878529dd604ae832546fe1",
  "updated_at": "2016-07-14T12:27:21.701Z",
  "created_at": "2016-07-14T12:27:21.701Z",
  "str_set": "SOME STRING WHICH WILL BE UPPERCASED AND INSERTED INTO MONGODB",
  "str_get": "SOME STRING with added value from addStrGetter",
  "__v": 0
}
 */
