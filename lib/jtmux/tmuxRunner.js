(function() {
    var createSession = function(configuration) {
        var win;
        var sessionName = configuration.name;
        callTmuxCommand('new-session', '-d -s '+sessionName);
        for(var i=0;i<configuration.windows.length;i++) {
            win = configuration.windows[i];
            createWindow(sessionName, win.name, win.command, i+1);
        }
    }

    var createWindow = function(sessionName, windowName, windowCommand, index) {
        var tmuxOptions = '-t '+sessionName+':'+index+' -n \''+windowName+'\'';
        if(windowCommand!=null) tmuxOptions += ' \''+windowCommand + '\''

        callTmuxCommand('new-window', tmuxOptions);
    }

    var setDefaultWindow = function(configuration) {
        var win;
        for(var i=0;i<configuration.windows.length;i++) {
            win = configuration.windows[i];
            if(win.default === true) {
                callTmuxCommand('select-window', '-t '+configuration.name+':'+i+1);
            }
        }
    }

    var callTmuxCommand = function(commandName, parameters) {
        var util = require('util');
        var exec = require('child_process').exec;
        function handleNothing(error, stdout, stderr) { }
        exec("tmux " + commandName + " " + parameters, handleNothing);
    }

    exports.execute = function(configuration, doCreateSession) {
       if(doCreateSession) {
        createSession(configuration);
       }
       return configuration.name;

    };

}).call(this);
