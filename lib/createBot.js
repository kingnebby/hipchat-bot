var Bot = require('./bot').Bot;

/**
 * @param {Object} opts the options.
 * Ex.
 * {
 *   jid: '1_2',
 *   password: 'bot_awesome',
 *   host: 'localhost',
 *   mucHost: 'conf.btf.hipchat.com',
 * }
 *
 */
module.exports = function(opts) {

  var b = new Bot(opts);

  b.connect();

  // Setup default handlers.

  b.onConnect(function() {
    console.log(' -=- > Connect');
    var self = this

    b.getRooms(function(err, rooms, stanza) {
      if (err) {
        console.log(' -=- > Error getting rooms: ' + err);
        return;
      }
      rooms.forEach(function(item) {
        console.log(' -=- > Room: ', item.name);
        b.join(item.jid)
      });
    })

    b.getRoster(function(err, items, stanza) {
      if (err) {
        console.log(' -=- > Error getting roster: ' + err);
        return;
      }
      items.forEach(function(item) {
        console.log(' -=- > Roster contact: ' + item.name);
      });
    });
  });

  b.onInvite(function(roomJid, fromJid, reason) {
    var self = this
    console.log(' -=- > Invite to ' + roomJid + ' by ' + fromJid + ': ' + reason);
    b.join(roomJid);
  });

  b.onDisconnect(function() {
    var self = this
    console.log(' -=- > Disconnect');

    setTimeout(function() {
      // Attempt reconnect
      b.connect()
    }, 1000);
  });

  b.onError(function(error, text, stanza) {
    var self = this
    console.log(' -=- > Error: ' + error + ' (' + text + ')' + ', ' + stanza);
    console.log(stanza.stack);
  });

  b.onMessage(function(channel, from, message) {
    var self = this
    console.log(' -=- > ' + from + '@' + channel + ' said: ' + message);
  });

  b.onPrivateMessage(function(jid, message) {
    var self = this
    console.log(' -=- > ' + jid + ' pm\'d: ' + message);
    b.message(jid, 'You said: ' + message)
  });

  return b
};