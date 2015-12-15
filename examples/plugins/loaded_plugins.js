/**
 * plugin info.
 */
var plugin = {
  name: '!commands',
  description: 'Replies with a list of loaded commands.',
  load: function(bot) {
    b = bot
    bot.onMessage(/\!commands/, onMessage)
  },
}

var b
var onMessage = function(channel, from, message) {
  var self = this;

  debugger
  var plugins = Object.keys(b.plugins)
  var text = ''
  plugins.forEach(function(key) {
    var plugin = b.plugins[key]
    text += plugin.name + "\n"
    text += '  ' + plugin.description + "\n"
  })

  self.message(channel, text)

  return true;
};

module.exports = plugin
