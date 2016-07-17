//Can a record be instantiated?
//Does it have required field name?
//Are records without names invalid?
//Are other attributes instantiated?
//Postal code should be string.
//Account credit should only take floats.

var assert = require('chai').assert;
var db = require("../../models");

describe('Customer', function() {

  describe('create', function() {

    // Drop and recreate Customer table before each test
    before(function(done){
      db.Customer.sync({ force:true })
      .then(function() {

        // Create a single customer
        new_customer = {name: 'Loraine', postal_code: '98103', account_credit: 13.50}
        db.Customer.create(new_customer).then(function() {
          done(null);
        });
      });
    });
      
    it('should have a new customer', function(done) {
      // Check that the count equals 1 
      db.Customer.count().then(function(count){
        assert.equal(1,count)
        done();
      });
    });
  });
});
