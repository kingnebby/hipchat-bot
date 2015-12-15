var plugin = {
  name: '!man',
  description: 'Replies with a link to the github repo',
  load: function(bot) {
    bot.onMessage(/\!man/, onMessage);
  },
}
var onMessage = function(channel, from, message) {
  var man = "Hipchat bot, reporting for duty. See git repo (coming soon) for details.\nType '!commands' for loaded commands."
  this.message(channel, man)
  return true;
};

module.exports = plugin