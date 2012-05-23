(function() {
    var fs = require('fs');
    var path = require('path');
    var getConfiguration = function() {
        var jsonFileName = getConfigurationFileName(process.cwd());
        var json = fs.readFileSync(jsonFileName, 'UTF-8');
        var obj = JSON.parse(json);
        return obj;
    };

    var getConfigurationFileName = function(dir) {
        var parent;

        if (fs.existsSync(path.join(dir, '.jtmux.json'))) {
            return path.join(dir, '.jtmux.json');
        }
        parent = path.normalize(path.join(dir, '..'));
        if (parent !== dir) {
            return getConfigurationFileName(parent);
        }
        return path.normalize(path.join(path.dirname(fs.realpathSync(__filename)), 'defaultConfiguration.json'));
    };
    exports.findConfiguration = function() {
        return getConfiguration();
    };

}).call(this);
