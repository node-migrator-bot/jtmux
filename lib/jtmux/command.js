(function() {
  var jtmux = require('./jtmux');
  exports.run = function(createSession) {
      var output = jtmux.run(createSession);
      return output;
  };

}).call(this);
