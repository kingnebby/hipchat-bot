// In your production script you'll import the bot and use environment vars to
// set your login creds.
var Bot = require('../lib/createBot');
var opts = {
  // jid: '?_??',
  jid: process.env.HB_JID,
  // password: '????',
  password: process.env.HB_PASSWORD,
  // hipchat host machine
  host: process.env.HB_HOST,
  // view in user settings in your hipchat instance.
  mucHost: process.env.HB_MUCHOST,
}
var b = new Bot(opts)

// TODO: Load whatever plugins you want. In production you'll have to refer to
// ./node_modules/hipchat-botty/examples/plugins/ for now.
var pathTo = './plugins/'
b.loadPlugin('commands', require(pathTo + 'loaded_plugins'))
b.loadPlugin('help', require(pathTo + 'help'))
b.loadPlugin('leaderboard', require(pathTo + 'leaderboard'))
b.loadPlugin('eightbot', require(pathTo + 'eightbot'))
b.loadPlugin('homer', require(pathTo + 'homer'))
b.loadPlugin('boeing', require(pathTo + 'boeing'))
