var _ = require('underscore')

const MAX = 500
const DEFAULT_LINE_NUM = 10

var messageQueue = {
  // "jid": {
  //   msgs: [string, string, ... ]
  // }
}

/**
 * This plugin keeps track of history for each room. This is useful when you have opened
 * a room to guests on the web, whose history is not kept by HipChat.
 */
var plugin = {
  name: '!history',
  description: 'Shows the last <n> lines of conversation in this room. Usage: "!history [number] [-u username] [-m word]"',
  load: function(bot) {
    // Init
    bot.onConnect(function() {

      // Monitor all messages.
      bot.onMessage(/.*/, onMessage);

    })
  },
}

/**
 * Main handler.
 */
var onMessage = function(channel, from_person, message) {
  var self = this;

  var channelDetails = getRoomStats(channel)

  // Check for !history command
  var response = checkHistCmd(message, channelDetails)
  if (response) {
    self.message(channel, response)
  }

  // Add hist line
  channelDetails.msgs.push(from_person + ": " + message)
  if (channelDetails.msgs.length > MAX) {
    channelDetails.msgs.shift()
  }

  return true;
};

/**
 * Generates a room stat object or returns an existing one.
 */
var getRoomStats = function(channel) {
  if (messageQueue[channel]) {
    return messageQueue[channel]
  } else {
    return messageQueue[channel] = {
      msgs: []
    }
  }
}

/**
 * Checks for a !history command and handles all options.
 * @returns string value of message that should be sent.
 */
var checkHistCmd = function(message, channelInfo) {
  // Check data.
  if (!message) return;
  if (!message.match(/\!history/)) return;

  var [, reqNum, , username, , matcher] = message.match(/\!history(\s+\d+)?(\s+\-u\s(\w+))?(\s+\-m\s(.+))?/)

  reqNum = isNaN(Number(reqNum)) ? DEFAULT_LINE_NUM : Number(reqNum);
  if (matcher) {
    matcher = new RegExp(matcher, 'i')
  }

  // Get local instance of lines.
  var lines = _.clone(channelInfo.msgs)

  // Filter by user
  if (username) {
    lines = _.filter(lines, function(line) {
      return line.match(new RegExp(username))
    })
  }

  // Filter by regexp
  if (matcher) {
    lines = _.filter(lines, function(line) {
      return line.match(matcher)
    })
  }

  // Get size based on user input.
  var reqNum = reqNum < MAX ? reqNum : MAX;
  reqNum = reqNum > 0 ? reqNum : 0;
  var size = lines.length
  var lowerBound = (size - reqNum > 0) ? (size - reqNum) : 0;
  var lines = lines.slice(lowerBound, size)

  // Return filtered history.
  response = lines.join('\n') || "Sorry, no history found!"
  return response
}

module.exports = plugin