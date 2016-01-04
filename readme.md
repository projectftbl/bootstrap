## @ftbl/bootstrapper

Bootstrapper will create and start an instance of an App, in an isolated domain.

### Usage

```javascript
var start = require('@ftbl/bootstrap').start
  , App = require('./lib/app');

start(new App);
```

To utilise `cluster`:

```javascript
var start = require('@ftbl/bootstrap').cluster
  , App = require('./lib/app');

start(new App);
```
