

/*

  A ping pong bot, whenever you send "ping", it replies "pong".

*/



// Import the discord.js module

const Discord = require('discord.js');



// Create an instance of a Discord client

const client = new Discord.Client();





// The ready event is vital, it means that your bot will only start reacting to information

// from Discord _after_ ready is emitted

client.on('ready', () => {

  console.log('I am ready!');
  client.user.setPresence({ status: 'idle', game: { name: 'bc!help | cv.11.00', type: 0 } });

});



// Create an event listener for messages

client.on('message', message => {

  // If the message is "ping"

  if (message.content === 'bc!ping') {

    // Send "pong" to the same channel

    message.reply('pong!');

  }

   if (message.content === 'bc!help') {
     message.react("⚠️")
     message.reply('I am sending help your way! Please check your DMs. 👍')
     message.author.sendMessage("⚠️ Warning! You are using the CANARY BUILD. Things can go wrong at any time.\nThe prefix is bc!\n**Babu commands: **\n")
    message.author.sendMessage("help - Commands and help.")
    message.author.sendMessage("hq - Sends a DM with an invite to the CarLua and UQ discords.")
     message.author.sendMessage("ping - Classics.")
     message.author.sendMessage("illuminavi - ILLUMINAVI!!")
     message.author.sendMessage("hello - Why can't I introduce myself?")
     message.author.sendMessage("react - 🤔")
 
   }
  if (message.content === "bc!illuminavi") {
    message.react("😧")
    message.channel.send("ILLUMINAVI CONFIRMED! https://i.imgur.com/92wjqvK.png")
}
  if (message.content === "bc!hello") {
    message.channel.send("Hi, I am Jen, alias Babu. I am here to preform commands for you! I was set to preform by Carson Houdek and lua_html.")
      }
  if (message.content === "bc!hq") {
    message.react("🔥")
    message.author.sendMessage("**CarLua HQ:** https://discord.gg/aKKwVEG")
    message.author.sendMessage("**UnnamedQuality:** https://discord.gg/c4yGwuQ")
      }
  if (message.content === "bc!abuintro") {
    message.channel.send("Oh, it is my turn to preform? Well, thank you!\n Hello! I am Babu, real name Jen. This is my showroom, where I am supposed to preform!\n Say b!community to view community commands, for this server only. Thank you! 🔥")
  }
  if (message.content === "bc!react") {
    message.react("😂")
  }
  if (message.content === "bc!pong") {
    message.react("🔔")
    message.react("😂")
    message.react("🔥")
    message.react("😧")
    message.react("👌")
    message.react("🤔")
    message.react("👍")
    message.react("⚠️")
    message.reply("u has discovered hidden secrets!\n here are mai emojissss!!!")
  }
});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);
