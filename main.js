var npm = require('npm');
npm.load(function(err) {
  // handle errors

  // install module ffi
  npm.commands.install(['redis'], function(er, data) {
    // log errors or data
  });

  npm.on('log', function(message) {
    // log installation progress
    console.log(message);
  });
});
