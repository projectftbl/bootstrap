var should = require('chai').should()
  , App = require('./fixtures/app')
  , sut = require('../lib').cluster;

describe('Cluster', function() {
  
  var suite = this;

  before(function() {
    sut(new App, 0);
  });
  
  it('should start', function() {
  });
  
});