/*
  Babu - Discord bot.
*/

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

// The token of your bot - https://discordapp.com/developers/applications/me
const token = '';

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('Babu has loaded.');
  client.user.setPresence({ game: { name: 'https://unnamedquality.github.io/babu/', type: 0 } });
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "b!ping"
  if (message.content === 'b!ping') {
  const pongembed = new Discord.RichEmbed()
  .setTitle("Babu Pong System")
  .setAuthor("Babu", "https://i.imgur.com/lm8s41J.png")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription("Pong!")
  .setFooter("Babu / Ping Result", "https://i.imgur.com/SVgQlAE.jpg")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
  .addField("There is", "nothing to see.", true)
  /*
   * Blank field, useful to create some space.
   */
  .addBlankField(true)
  .addField("There still is", "nothing to see.", true);
    // Send "pong" to the same channel
    message.channel.send({pongembed});
  }
});

// Log our bot in
client.login(token);
