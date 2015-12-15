var Bot = require('../lib/createBot');

// jid: '?_??',
// password: '????',
// hipchat host machine
// host: 'localhost',
// view in user settings in your hipchat instance.
// mucHost: 'conf.btf.hipchat.com',

var opts = {
  jid: process.env.HB_JID,
  password: process.env.HB_PASSWORD,
  host: process.env.HB_HOST,
  mucHost: process.env.HB_MUCHOST,
}

var b = new Bot(opts)
var pathTo = './examples/plugins/'

b.loadPlugin('chucky', require(pathTo + 'chuckjokes'))
b.loadPlugin('commands', require(pathTo + 'loaded_plugins'))
b.loadPlugin('man', require(pathTo + 'manual'))

// Custom onMessage
// b.onMessage(/regex-condition/, function(channel, from, message) {
b.onMessage(function(channel, from, message) {
  var self = this

  console.log(arguments);
  self.message(channel, 'I totally agree.')
})