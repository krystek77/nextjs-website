'use strict';

module.exports.id = 'parameters_unit_values_update';

module.exports.up = function (done) {
  // use this.db for MongoDB communication, and this.log() for logging
  const validator = this.db.db.getCollectionInfos({
    name: 'parameters',
  }).validator;

  this.db.runCommand({
    collMod: 'parameters',
    validator: validator,
    validationLevel: 'moderate',
  });
  done();
};

module.exports.down = function (done) {
  // use this.db for MongoDB communication, and this.log() for logging
  done();
};
