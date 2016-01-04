var should = require('chai').should()
  , App = require('./fixtures/app')
  , sut = require('../lib').start;

describe('Start', function() {
  
  var suite = this;

  before(function() {
    sut(new App);
  });
  
  it('should start', function() {
  });
  
});