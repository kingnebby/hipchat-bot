// This is a sample plugin that will display
// a random Chuck Norris joke every time someone
// types !chuck in a channel.

/**
 * plugin info.
 */
var plugin = {
  name: '!chuck',
  description: 'Replies with true facts about the man himself.',
  load: function(bot) {
    bot.onMessage(/\!chuck/, onMessage);
  },
}

// TODO: submit readme fix to this.
var ChuckAPI = require('chuck-norris-api')
var chucky = new ChuckAPI()


/**
 * Main handler.
 */
var onMessage = function(channel, from, message) {
  var self = this;

  chucky.getRandom().then(function(joke) {
    self.message(channel, joke.value.joke)
  })

  return true;
};

module.exports = plugin