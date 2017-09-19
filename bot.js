 /*
  A ping pong bot, whenever you send "ping", it replies "pong".
*/

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

// Embed function
function embedMessage(title, description = 'ᅠ') => {

  if (description !== 'ᅠ') description += '\n';

  return {

    title,

    description: `${description}\n[Better processing for Babu? Donate today!](link unavailable)`,

    timestamp: new Date(),

    footer: {

      text: 'Powered by Babu',

      icon_url: 'https://i.imgur.com/tQ3brof.png'

    }

  }

}




// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'b!ping') {
    // Send "pong" to the same channel
    message.channel.send({embed: embedMessage("Output", "Pong!")});
  }
   if (message.content === 'b!help') {
    
     message.author.sendMessage({embed: embedMessage("Babu Help", "Help is currently in progress. Try again later.")})
   }
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
