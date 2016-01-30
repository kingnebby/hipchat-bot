/**
 * Answers with a magic eightball answer.
 */
var plugin = {
  name: '!eightbot',
  description: 'Replies with the absolute truth.',
  load: function(bot) {
    bot.onMessage(/\!eightbot/, onMessage);
  },
}

// Could not find good quote api online!
var responses = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes, definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
]

/**
 * Main handler.
 */
var onMessage = function(channel, from, message) {
  var self = this;
  var rand = responses[Math.floor(Math.random() * responses.length)];
  self.message(channel, rand)
  return true;
};

module.exports = plugin