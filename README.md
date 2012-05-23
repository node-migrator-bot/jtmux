#jtmux

javascript tmux configuration automator.

##Installation

  npm install -g jtmux

##Usage

###Create a configuration file in json
The configuration files for jtmux are simple json files. It should be easy to get something up and running. 

By convention the configuration file must be named .jtmux.json - jtmux will traverse up the path until it finds one, or hits root. In the latter case the default configuration is used in stead.

Checkout out the lib/jtmux/defaultConfiguration.json file for an idea as to how it works.

###Run jtmux
jtmux will either attach you to the existing session - or create a new one, with the windows you have specified in your configuration file. 
