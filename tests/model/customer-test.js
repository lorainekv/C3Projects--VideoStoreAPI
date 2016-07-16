//Can a record be instantiated?
//Does it have required field name?
//Are records without names invalid?
//Are other attributes instantiated?
//Postal code should be 6 numbers long.
//Account credit should only take floats.

var assert = require('chai').assert;

describe('Customer', function() {
  describe('.findOrCreate', function() {
    it('should create a new customer', function() {
      Customer.findOrCreate({name: 'Loraine Kanervisto', postal_code: '98103', account_credit: 13.50});
      
      assert.equal(1, Customer.findAndCountAll());
    });
  });
});
