/**
 * plugins to define common fields for many schemas
 *
 */

module.exports.idWithAutoIncrement = function (sch, schOpts) {
    'use strict';
    // console.log(JSON.stringify(schemaOpts, null, 2));


    //*** add new schema paths
    sch.add({
        id: {type: Number, default: 1}
    });


    //*** autoincrement 'id' value
    sch.pre('save', function (next) {
        // console.log(this.constructor.modelName); //'schadditionsMD'

        var doc = this; //this replaces doc to be saved
        this.model(this.constructor.modelName).findOne().sort({id: -1}).exec(function (err, result) {
            if (err) {next(err);}

            if (result && result.id) {
                doc.id = result.id + 1;
            }

            next();
        });
    });


};
