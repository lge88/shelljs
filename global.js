var shell = require('./shell.js');
for (var cmd in shell)
  global[cmd] = shell[cmd];

var path = require('path');
['join', 'resolve', 'relative', 'basename', 'extname', 'normalize'].forEach(function(cmd) {
  global[cmd] = path[cmd];
});
