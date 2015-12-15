# hipchat-bot
A lightweight pluggable node hipchat bot.

Based heavily on [wobot](http://github.com/cjoudrey/wobot)

Github: [hipchat-bot](https://github.com/kingnebby/hipchat-bot)

# Usage

`npm install hipchat-botty`

If you run into errors you may need to install

 - libexpat1-dev: `apt-get install libexpat1-dev`
 - libicu-dev: `apt-get install libicu-dev`

##Example

```javascript
var Bot = require('hipchat-botty');

// Use environment vars called HB_* for your configs.
var opts = {
  jid: process.env.HB_JID,
  password: process.env.HB_PASSWORD,
  host: process.env.HB_HOST,
  mucHost: process.env.HB_MUCHOST,
}

// Creates a bot with default handlers.
var b = new Bot(opts)

// Loads some plugins from the src.
// Create your own or contribute!
var pathto = '../node_modules/hipchat-botty/examples/plugins/'
b.loadPlugin('chucky', require(pathto + 'chuckjokes'))
b.loadPlugin('commands', require(pathto + 'loaded_plugins'))
b.loadPlugin('man', require(pathto + 'manual'))

// Create your own listeners:
b.onMessage(/\!agree/, function(channel, from, message) {
  var self = this
  console.log(arguments);
  self.message(channel, 'I totally agree.')
})

```
