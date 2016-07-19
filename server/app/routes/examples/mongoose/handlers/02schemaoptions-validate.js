/**
 * GET /examples/mongoose/02schemaoptions-validate
 *
 * *** schema field option: validate
 */
require('rootpath')();
var schemaoptionsValidate = require('server/app/models/examples/schemaoptionsValidate');
var errorsLib = require('server/app/lib/errorsLib');


module.exports = function (req, res, next) {
    'use strict';

    //valid input
    var docInput = {
        str_valid1: 'more then five', //must have >5 chars
        str_valid2: 'less 10', //must have <10 chars
        str_reg: '5' //must be string with number
    };

    //invalid input
    var docInputErr = {
        str_valid1: 'five',
        str_valid2: 'more then ten characters',
        str_reg: 'should be number'
    };

    schemaoptionsValidate
        .saveDocAsync(docInputErr) //put 'docInputErr' to emulate errors
        .then((data) => {
            console.log('Inserted into mongoDB: \n' + JSON.stringify(data, null, 2));
            res.send('Inserted into mongoDB: <pre>' + JSON.stringify(data, null, 2) + '</pre>');
        })
        .catch(err => {

            if (err.name === 'ValidationError') { //validation errors
                throw err;
            } else { //all other errors
                err.status = err.status || 500;
                errorsLib.onErrorCatch(err, res);
            }
        })
        .catch(err => {
            console.log(err.errors.str_valid1.message);
            // console.log(err.errors.str_valid1.toString()); //same as above
            console.log(JSON.stringify(err.errors.messages, null, 2));

            res.send('VALIDATIONerr: <pre>' + JSON.stringify(err, null, 2) + '</pre>');
        });

};


/*
Browser window:

'docInput'

{
  "__v": 0,
  "updated_at": "2016-07-17T11:35:31.760Z",
  "created_at": "2016-07-17T11:35:31.760Z",
  "str_valid1": "more then five",
  "str_valid2": "less 10",
  "str_reg": "5",
  "_id": "578b6d8378c286e51409778d"
}





'docInputErr'

{
  "message": "SchemaoptionsValidate validation failed",
  "name": "ValidationError",
  "errors": {
    "str_reg": {
      "message": "A number required",
      "name": "ValidatorError",
      "properties": {
        "validator": {},
        "type": "user defined",
        "message": "A number required",
        "path": "str_reg",
        "value": "should be number"
      },
      "kind": "user defined",
      "path": "str_reg",
      "value": "should be number"
    },
    "str_valid2": {
      "message": "Character length is greater then allowed.",
      "name": "ValidatorError",
      "properties": {
        "type": "user defined",
        "message": "Character length is greater then allowed.",
        "path": "str_valid2",
        "value": "more then ten characters"
      },
      "kind": "user defined",
      "path": "str_valid2",
      "value": "more then ten characters"
    },
    "str_valid1": {
      "message": "Character length is less then allowed.",
      "name": "ValidatorError",
      "properties": {
        "type": "user defined",
        "message": "Character length is less then allowed.",
        "path": "str_valid1",
        "value": "five"
      },
      "kind": "user defined",
      "path": "str_valid1",
      "value": "five"
    }
  }
}
 */
