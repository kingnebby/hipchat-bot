var pluralize = require('pluralize')
  /**
   * plugin info.
   */
var plugin = {
  name: '!leaderboard',
  description: 'Keeps track of who has been ++\'d today.',
  load: function(bot) {
    bot.onConnect(function() {
      bot.getRoster(function(err, d, stanza) {
        if (err) {
          console.log(err);
          return
        }
        try {
          bot.leaderboard = {}
          d.forEach(function(person) {
            bot.leaderboard[person.mention_name] = 0
          })
          bot.onMessage(/\+\+/, onScore);
          bot.onMessage(/\!leaderboard$/i, onShow);
          bot.onMessage(/\!leaderboard.*(reset|clear|delete|remove)/i, onReset);
        } catch (e) {
          console.log(e);
        }
      })
    })
  },
}

/**
 * Resets leaderboard
 */
var onReset = function(channel, from, message) {
  var self = this
  try {

    Object.keys(self.leaderboard).forEach(function(person) {
      self.leaderboard[person] = 0
    })
    self.message(channel, '/quote Leaderboard was reset by ' + from + '. You are all equal, but for a moment.')
  } catch (e) {
    console.log(e);
  }
  return true
}

/**
 * Main handler.
 */
var onScore = function(channel, from, message) {
  try {
    var self = this
    var name = message.match(/([A-Za-z]+)\s*\+\+/)[1]
    if (self.leaderboard[name] === undefined) {
      self.leaderboard[name] = 0
    }
    self.leaderboard[name] += 1
    var points = pluralize('point', self.leaderboard[name])
    self.message(channel, '/quote ' + name + ' now has ' + self.leaderboard[name] + ' ' + points)
  } catch (e) {
    console.log(e);
  }

  return true;
};


/**
 * Displays leaderboard
 */
var onShow = function(channel, from, message) {
  try {
    var response = ''
    var self = this
    Object.keys(self.leaderboard).forEach(function(key) {
      response += key + ": " + self.leaderboard[key] + '\n'
    })
    self.message(channel, '/quote ' + response)
  } catch (e) {
    console.log(e);
  }

  return true
}

module.exports = plugin