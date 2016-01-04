var domain = require('domain')
  , log = require('@ftbl/log');

module.exports = function(app) {
  var global = domain.create();

  global.on('error', function(err) {
    log.error('Unhandled web exception %s/n%s', err.message, JSON.stringify(err.stack));
  });

  global.run(function() {
    app.start();
  });
}