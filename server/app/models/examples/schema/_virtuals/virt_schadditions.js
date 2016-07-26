/**
 * VIRTUALS
 * virtual paths - exists only in output data and dont exists in database
 */


module.exports.virt_name_age = function () {
  return this.name + ' -> ' + this.age;
};
