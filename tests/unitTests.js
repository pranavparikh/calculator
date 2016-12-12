var Add = require('../utils/add');
var Expect = require('chai').expect;

describe('Calculator', function() {
  it('should add two numbers', function () {
    Expect(Add(1, 3)).to.equal(4);
  });
});