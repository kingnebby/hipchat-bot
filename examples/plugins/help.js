var plugin = {
  name: '!help',
  description: 'Replies with helpful info',
  load: function(bot) {
    bot.onMessage(/^((\@)?hipbot(\?|.*h(elp)?(\?)?)|!help)$/, onMessage);
  },
}
var onMessage = function(channel, from, message) {
  var help = "Hipchat bot, reporting for duty. See https://github.com/kingnebby/hipchat-bot for details.\nType '!commands' for loaded commands."
  this.message(channel, help)
  return true;
};

module.exports = plugin