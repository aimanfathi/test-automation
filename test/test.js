var assert = require('chai').assert;
var expect = require('chai').expect;
var result = require('../app');

describe('My Test Pack', function() {
    it('should test fail', function() {
      //assert.equal( result.add(2,4) , 7);
      expect(result.add(2,4)).to.equal(6);
    });


    it('should test pass', function() {
        assert.equal( result.add(3,5) , 8);
      });
});