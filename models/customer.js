'use strict';
module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define('Customer', {
    name: DataTypes.STRING,
    postal_code: DataTypes.STRING,
    account_credit: DataTypes.FLOAT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Customer;
};
