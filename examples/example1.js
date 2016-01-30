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
var pathTo = './plugins/'

b.loadPlugin('commands', require(pathTo + 'loaded_plugins'))
b.loadPlugin('help', require(pathTo + 'help'))
b.loadPlugin('leaderboard', require(pathTo + 'leaderboard'))
b.loadPlugin('eightbot', require(pathTo + 'eightbot'))
b.loadPlugin('homer', require(pathTo + 'homer'))
b.loadPlugin('boeing', require(pathTo + 'boeing'))
