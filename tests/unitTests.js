var Add = require('../utils/add');
var Subtract = require('../utils/subtract');
var Expect = require('chai').expect;

describe('Calculator', function() {
  it('should add two numbers', function () {
    Expect(Add(1, 3)).to.equal(4);
  });

  it('should subtact two numbers', function () {
    Expect(Subtract(2, 1)).to.equal(1);
  });

  it('should throw exception for invalid numbers', function () {
    try {
      Subtract('a','b');
    } catch (e) {
      Expect(e.message).to.equal('Invalid input');
    }
  })
});