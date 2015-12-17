/**
 * plugin info.
 */
var plugin = {
  name: '!TEMPLATE',
  description: 'PUT IN SOME HELPFUL TEXT.',
  load: function(bot) {
    bot.onMessage(/\!TEMPLATEREGEX/, onMessage);
  },
}

/**
 * Main handler.
 */
var onMessage = function(channel, from, message) {
  var self = this;

  // Actions...

  self.message(channel, 'RESPONSE')

  return true;
};

module.exports = plugin