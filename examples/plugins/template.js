/**
 * Conforms the plugin interface so that this plugin can be loaded by the Bot's
 * loadPlugin method.
 *
 * TODO: Give a name and description
 */
var plugin = {
  name: '!TEMPLATE',
  description: 'PUT IN SOME HELPFUL TEXT.',
  load: function(bot) {
    // TODO: Change the regexp to be used for your command.
    bot.onMessage(/\!TEMPLATEREGEX/, onMessage);
  },
}

/**
 * Main message handler that will get called when someone invokes your command
 * with the onMessage matcher above.
 *
 * @param  {string} channel      the jid of the channel where a message was sent.
 * @param  {string} from_user    the user full name that sent the message.
 * @param  {string} message      the message sent.
 * @param  {array}  matches      the matches returned by the condition when it is a RegExp
 */
var onMessage = function(channel, from_user, message) {

  // TODO: Do your command.

  // TODO: response with something delicious.
  // Ex. self.message(channel, 'Be cool about fire safety.')
};

module.exports = plugin