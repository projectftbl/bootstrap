var log = require('@ftbl/log');

module.exports = function(app) {
  app.start()

  .catch(function(err) {
    log.error('Unhandled exception %s/n%s', err.message, JSON.stringify(err.stack));
  });
};