var cluster = require('cluster')
  , os = require('os')
  , domain = require('domain')
  , log = require('@ftbl/log')
  , start = require('./start');

module.exports = function(app, numberOfCPUs) {
  var count = numberOfCPUs === 0 || numberOfCPUs != null ? numberOfCPUs : os.cpus().length;

  if (cluster.isMaster) {
    for (var i=0; i<count; i++) cluster.fork();

    cluster.on('exit', function(worker, code, signal) {
      log.error('Worker ' + worker.process.pid + ' died.');

      process.exit(1);
    });

    cluster.on('disconnect', function(worker) {
      cluster.fork();
    });

  } else {
    start(app);
  }
}