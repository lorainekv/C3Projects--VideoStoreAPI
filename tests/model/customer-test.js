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
          done(null);
          });
    });
      
    it('should create a new customer', function(done) {
      new_customer = {name: 'Loraine', postal_code: '98103', account_credit: 13.50}
        
      // Create customer
      db.Customer.create(new_customer).then(function() {
        // Then check if customer is created
        db.Customer.findAndCountAll({
          where: {
            name: "Loraine" 
          }
        }).then(function(result){
          // Assert the count equals 1
          assert.equal(1,result.count)
          done();
        });
      });
    });
  });
});
