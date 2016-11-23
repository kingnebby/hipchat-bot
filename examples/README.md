# Plugin Guide #

## example1.js ##

This file shows how to write a quick script to connect your bot instance to a server.

### Get a HipChat user instance ###

HipBot is a user just like any other user, have your admin create a new user and you can find its XMPP/Jabber Account Information under that users settings.

The account details are commented in the example1.js code.

### Live testing ###

You should be able to run the script locally and invite your bot to a private room and test out some of the commands to ensure you've set it up correctly. Careful though, hipbot can become quite chatty if left unchecked.

## Building your own plugin ##

The bot is created by the lib/createBot.js module and its `loadPlugin` method used to load user specified plugin bot commands. This wraps the HipChat API nicely so you can focus on writing commands and eating donuts.

The lib/bot.js is the API wrapper code. You can refer to this file to see all options available to the HipChat bot.

The examples/plugins/template.js is intended to be copied to help you get going on your new plugin. Refer to the code to see what sections to start filling out.

### Testing ###

So... do you have any free time? ;-)

Since the commands are usually simple, testing in line works well enough for the time being.

**Happy botting!**

