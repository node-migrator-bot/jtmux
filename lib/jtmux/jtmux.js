(function() {
  var finder = require('./confFinder');
  var runner = require('./tmuxRunner');

  exports.run = function(createSession) {
    var configuration = finder.findConfiguration();
    var output = runner.execute(configuration, createSession); 
    return output;
  };

}).call(this);
