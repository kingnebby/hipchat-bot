// This is a plugin that will display
// a random Boeing meeting quote every time someone
// types !boeing in a channel.

/**
 * plugin info.
 */
var plugin = {
  name: '!boeing',
  description: 'Replies with quotes heard during Boeing meetings.',
  load: function(bot) {
    bot.onMessage(/\!boeing/, onMessage);
  },
}

// Could not find good quote api online!
var responses = [
  "I expected to hear less, but I'm not even hearing that.",
  "Our funding might be zero now, but it will be less in the future.",
  "Where you stand on that issue depends on where you sit.",
  "Our customer wants the answer instantaneously, if not sooner.",
  "The likelihood is highly unlikely to be zero or less.",
  "It was completely unintentional... We are closer to keystone cops here than international spy masterminds.",
  "This is like riding the crazy horse into the burning barn.",
  "That's the high level deep dive stuff.",
  "Be careful, no one has tolerance for good news.",
  "We should be able to hold a business review in the same amount of time that it takes to play a round of golf. We are, but we're playing on a public course.",
  "It's a one day class packed into 80 hours.",
  "We can't see the recurring benefits through the non-recurring trees.",
  "We missed this because we are laser focused on everything else.",
  "Too many people haven't been complaining.",
  "We need to use the 'Wish it could be like this' schedule.",
  "We'll throw human shims at it.",
  "It's the greatest thing since sliced bread if you're not using a pipe wrench for the slicing.",
  "The root square analysis document is better than a lullaby.",
  "It is not fully amok, more like half amok.",
  "They'll spend their time polishing the pixels.",
  "This is what puts the 'fun' in dysfunction.",
  "We peeled a lot of onions from that layer.",
  "'Holy *&@#!....(pause).....oh, sorry, I thought I was on mute...'",
  "I'm not a forest green, but I'm a solid honeydew (when commenting on a scorecard).",
  "This sounds like a process we're using to justify stupidity.",
  "We were not just drinking the 'kool aid', I was pouring it!",
  "You can't read the chart, but everything you need to know is there.",
  "I believe you believe what you said.",
  "Usually we do that until we find out later that we should not have done it that way.",
  "I didn't want to give you any misinformation... yet.",
  "It's the same discussion we had a week ago... we just have new charts.",
  "Information Technology and drug pushers are the only people who call their customers users.",
  "That's just 'phynance' physics.",
  "I can make the data support what I remember.",
  "We need to use the orange stick... it looks like a carrot but it feels like a stick.",
  "We have a new out of date – date, and that date will be updated next week.",
  "You know what we need to do? We need to hug the process tree.",
  "We need suspenders to hold up our belt, because we're wearing no pants.",
  "Let’s call a meeting to get our heads together and pool our ignorance.",
  "We have consultants stacked up like cord wood around here... and you don't want to know how much a cord costs.",
  "Implement bugs found in lab.",
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