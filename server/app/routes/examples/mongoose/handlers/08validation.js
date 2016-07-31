/**
 * GET /examples/mongoose/08validation...
 */

require('rootpath')();
var validationModel = require('server/app/models/examples/validation');
var errorsLib = require('server/app/lib/errorsLib');




/*****************************************************************************************
* GET /examples/mongoose/08validation-builtin *
*****************************************************************************************
* Built-in validators: enum, max, min. */
module.exports.builtin = function (req, res, next) {
    'use strict';

    //valid input
    var docNewValid = {
        str: 'Some dtring!',
        str_enum: 'pas',
        num: 123,
        num_minmax: 21,
        my_id: '277fde13ea79fe632b75cb6a' //must have 24 chars
    };

    //invalid input
    var docNewInvalid = {
        str: 55, //will not cause error ???
        str_enum: 'krokodil',
        num: 'some text',
        num_minmax: 35,
        my_id: '277fde13ea79fe632b75cb6' //must have 24 chars
    };

    validationModel.saveDocAsync(docNewInvalid)
        .then(function (insDoc) {
            console.log('Inserted: \n' + JSON.stringify(insDoc, null, 2));
            res.send('Inserted: <pre>' + JSON.stringify(insDoc, null, 2) + '</pre>');
        })
        .catch(function (err) {
            console.log(JSON.stringify(err, null, 2));
            err.status = err.status || 500;
            errorsLib.onErrorCatch(err, res);
        });

};
/*
CONSOLE:
err object:
{
  "message": "validationMD validation failed",
  "name": "ValidationError",
  "errors": {
    "my_id": {
      "message": "Cast to ObjectID failed for value \"277fde13ea79fe632b75cb6\" at path \"my_id\"",
      "name": "CastError",
      "kind": "ObjectID",
      "value": "277fde13ea79fe632b75cb6",
      "path": "my_id",
      "reason": {
        "message": "Cast to ObjectId failed for value \"277fde13ea79fe632b75cb6\" at path \"my_id\"",
        "name": "CastError",
        "kind": "ObjectId",
        "value": "277fde13ea79fe632b75cb6",
        "path": "my_id"
      }
    },
    "num": {
      "message": "Cast to Number failed for value \"some text\" at path \"num\"",
      "name": "CastError",
      "kind": "Number",
      "value": "some text",
      "path": "num",
      "reason": {
        "message": "Cast to number failed for value \"some text\" at path \"num\"",
        "name": "CastError",
        "kind": "number",
        "value": "some text",
        "path": "num"
      }
    },
    "num_minmax": {
      "message": "Path `num_minmax` (35) is more than maximum allowed value (30).",
      "name": "ValidatorError",
      "properties": {
        "max": 30,
        "type": "max",
        "message": "Path `{PATH}` ({VALUE}) is more than maximum allowed value (30).",
        "path": "num_minmax",
        "value": 35
      },
      "kind": "max",
      "path": "num_minmax",
      "value": 35
    },
    "str_enum": {
      "message": "`krokodil` is not a valid enum value for path `str_enum`.",
      "name": "ValidatorError",
      "properties": {
        "enumValues": [
          "pas",
          "mačka",
          "konj",
          "ovca"
        ],
        "type": "enum",
        "message": "`{VALUE}` is not a valid enum value for path `{PATH}`.",
        "path": "str_enum",
        "value": "krokodil"
      },
      "kind": "enum",
      "path": "str_enum",
      "value": "krokodil"
    }
  }
}

 */



/*****************************************************************************************
* GET /examples/mongoose/08validation-validateproperty *
*****************************************************************************************
* Property validate in schema path definition. */
module.exports.validateproperty = function (req, res, next) {
    'use strict';

    //valid input
    var docNewValid = {
        str_reg: '9',
        str_inpath: 'Something'
    };

    //invalid input
    var docNewInvalid = {
        str_reg: 'as',
        str_inpath: 'b'
    };

    validationModel.saveDocAsync(docNewInvalid)
        .then(function (insDoc) {
            console.log('Inserted: \n' + JSON.stringify(insDoc, null, 2));
            res.send('Inserted: <pre>' + JSON.stringify(insDoc, null, 2) + '</pre>');
        })
        .catch(function (err) {
            console.log(JSON.stringify(err, null, 2));
            err.status = err.status || 500;
            errorsLib.onErrorCatch(err, res);
        });

};
/*
{
  "message": "validationMD validation failed",
  "name": "ValidationError",
  "errors": {
    "str_inpath": {
      "message": "str_inpath: b ---- Character length is out of limits.",
      "name": "ValidatorError",
      "properties": {
        "type": "user defined",
        "message": "{PATH}: {VALUE} ---- Character length is out of limits.",
        "path": "str_inpath",
        "value": "b"
      },
      "kind": "user defined",
      "path": "str_inpath",
      "value": "b"
    },
    "str_reg": {
      "message": "str_reg: as ---- String must contain digits only.",
      "name": "ValidatorError",
      "properties": {
        "validator": {},
        "type": "user defined",
        "message": "{PATH}: {VALUE} ---- String must contain digits only.",
        "path": "str_reg",
        "value": "as"
      },
      "kind": "user defined",
      "path": "str_reg",
      "value": "as"
    }
  }
}
 */



/*****************************************************************************************
* GET /examples/mongoose/08validation-validate-schema *
*****************************************************************************************
* Async validation inside schema -- Sch.path('path').validate(fn, 'message'). */
module.exports.validate_on_schema = function (req, res, next) {
    'use strict';

    //valid input
    var docNewValid = {
        str_meth: 'abc def'
    };

    //invalid input
    var docNewInvalid = {
        str_meth: '9as'
    };

    validationModel.saveDocAsync(docNewInvalid)
        .then(function (insDoc) {
            console.log('Inserted: \n' + JSON.stringify(insDoc, null, 2));
            res.send('Inserted: <pre>' + JSON.stringify(insDoc, null, 2) + '</pre>');
        })
        .catch(function (err) {
            console.log(JSON.stringify(err, null, 2));
            err.status = err.status || 500;
            errorsLib.onErrorCatch(err, res);
        });

};
/*
CONSOLE:

{
  "message": "validationMD validation failed",
  "name": "ValidationError",
  "errors": {
    "str_meth": {
      "message": "str_meth:9as---Input must not contain number.",
      "name": "ValidatorError",
      "properties": {
        "type": "user defined",
        "message": "{PATH}:{VALUE}---Input must not contain number.",
        "path": "str_meth",
        "value": "9as"
      },
      "kind": "user defined",
      "path": "str_meth",
      "value": "9as"
    }
  }
}
 */



/*****************************************************************************************
* GET /examples/mongoose/08validation-validate-doc *
*****************************************************************************************
* Async validation on doc -- doc.validate(fn, 'message').
* This example is finding one doc and (last updated_at) and
* try to update 'str_meth' with an invalid value '9as'. The value is invalid because it contain number 9. */
module.exports.validate_on_doc = function (req, res, next) {
    'use strict';


    validationModel.validateDoc()
        .then(function (insDoc) {
            console.log('Updated: \n' + JSON.stringify(insDoc, null, 2));
            res.send('Updated: <pre>' + JSON.stringify(insDoc, null, 2) + '</pre>');
        })
        .catch(function (err) {
            console.log(JSON.stringify(err, null, 2));
            err.status = err.status || 500;
            errorsLib.onErrorCatch(err, res);
        });

};
