

/*

  A ping pong bot, whenever you send "ping", it replies "pong".

*/



// Import the discord.js module

const Discord = require('discord.js');



// Create an instance of a Discord client

const client = new Discord.Client();



// Embed test

const embedtest = {
  "title": "Embed Test ~~(did you know you can have markdown here too?)~~",
  "description": "Blame discord. [lol](https://discordapp.com)```\nem!bed-test is for embed testing.```",
  "url": "https://discordapp.com",
  "color": 1887287,
  "fields": [
    {
      "name": "Line 1",
      "value": "some of these properties have certain limits..."
    },
    {
      "name": "Line 2",
      "value": "try exceeding some of them!"
    },
    {
      "name": "Line 3",
      "value": "an informative error should show up, and this view will remain as-is until all issues are fixed"
    },
    {
      "name": "Line 4",
      "value": "these last two",
      "inline": true
    },
    {
      "name": "Line 5",
      "value": "are inline fields",
      "inline": true
    }
  ]
};

const helpEmbed = {
  "title": "Help system",
  "description": "The prefix is bc!",
  "color": 901366,
  "timestamp": "2017-09-23T17:36:45.072Z",
  "footer": {
    "icon_url": "https://i.imgur.com/64xbGWQ.png",
    "text": "Babu Help System"
  },
  "thumbnail": {
    "url": "https://i.imgur.com/64xbGWQ.png"
  },
  "author": {
    "name": "Babu (Canary)",
    "url": "https://discordapp.com",
    "icon_url": "https://i.imgur.com/64xbGWQ.png"
  },
  "fields": [
    {
      "name": "Information",
      "value": "hq - Links to UQ & CL. \nhelp - See this message.\n",
      "inline": true
    },
    {
      "name": "Fun",
      "value": "ping - The first of the first. \noof - Oof!\nreact - :thinking:\nilluminavi - Secret civilization.\nnoob - lel\nlennyoof - **NSFW** Lenny oof.",
      "inline": true
    }
  ]
};

const deathOOF = {
  "title": "Roblox death sound",
  "description": "Oof!",
  "color": 15864217,
  "timestamp": "2017-09-23T17:54:42.959Z",
  "footer": {
    "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
    "text": "The result of OOF is your doom."
  },
  "image": {
    "url": "https://i.imgur.com/EXSdJ9l.png"
  },
  "author": {
    "name": "TheDoomOfDeathzzxfeifvh",
    "url": "https://discordapp.com",
    "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
  }
};

const noobembed = {
  "title": "You are...",
  "description": "a noob. here's a picture of you. noob.",
  "color": 3596514,
  "timestamp": "2017-09-24T15:08:20.642Z",
  "footer": {
    "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
    "text": "Your noob!?!?"
  },
  "thumbnail": {
    "url": "https://cdn.discordapp.com/embed/avatars/0.png"
  },
  "image": {
    "url": "https://i.imgur.com/VMKuy8E.png"
  },
  "author": {
    "name": "My Noob!",
    "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
  }
};

const lennyOOFembed = {
  "title": "Lenny...",
  "description": "oof!",
  "url": "https://cdn.discordapp.com/attachments/360538338664644608/361531801036128266/Screen_Shot_2017-09-24_at_9.23.41_AM.png",
  "color": 10912508,
  "timestamp": "2017-09-24T15:21:05.234Z",
  "footer": {
    "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
    "text": "footer lennys"
  },
  "thumbnail": {
    "url": "https://cdn.discordapp.com/embed/avatars/0.png"
  },
  "image": {
    "url": "https://cdn.discordapp.com/attachments/360538338664644608/361531801036128266/Screen_Shot_2017-09-24_at_9.23.41_AM.png"
  },
  "author": {
    "name": "lenny feck",
    "url": "https://cdn.discordapp.com/attachments/360538338664644608/361531801036128266/Screen_Shot_2017-09-24_at_9.23.41_AM.png",
    "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
  }
};

// The ready event is vital, it means that your bot will only start reacting to information

// from Discord _after_ ready is emitted

client.on('ready', () => {

  console.log('I am ready!');
  client.user.setPresence({ status: 'dnd', game: { name: 'bc!help | cv.11.02', type: 0 } });

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
     message.author.sendMessage("⚠️ Warning! You are using the CANARY BUILD. Things can go wrong at any time.")
     message.author.sendMessage({ embed: helpEmbed })
     message.author.sendMessage("Can't see the help message? You can say bc-ne!help")
   }
   if (message.content === 'bc-ne!help') {
     message.react("⚠️")
     message.reply('I am sending help your way! Please check your DMs. 👍')
     message.author.sendMessage("⚠️ Warning! You are using the CANARY BUILD. Things can go wrong at any time.\nThe prefix is bc-ne!\n Prefix for embeds is bc!\n**Babu commands: **\n")
    message.author.sendMessage("help - Commands and help.")
    message.author.sendMessage("hq - Sends a DM with an invite to the CarLua and UQ discords. (can use bc! without embed)")
     message.author.sendMessage("ping - Classics. (can use bc! without embed)")
     message.author.sendMessage("illuminavi - ILLUMINAVI!! (can use bc! without embed)")
     message.author.sendMessage("hello - Why can't I introduce myself? (can use bc! without embed)")
     message.author.sendMessage("react - 🤔 (can use bc! without embed)")
     message.author.sendMessage("**Babu FUN Commands: **\n oof- Oof! Requested by muhammed#3243.\n noob - LIVING LIFE OF NOOB I USE MAI GUN\n lennyoof - **NSFW**")
 
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
  if (message.content === "bc!oof") {
    message.react("💀")
    message.reply({ embed: deathOOF })
  }
  if (message.content === "bc-ne!oof") {
    message.react("💀")
    message.reply("oof! https://i.imgur.com/EXSdJ9l.png")
  }
  if (message.content === "bc!noob") {
    message.reply({ embed: noobembed })
  }
  if (message.content === "bc!lennyoof") {
    message.reply({ embed: lennyOOFembed })
  }
  if (message.content === "bc-ne!lennyoof") {
    message.reply("lenny oof")
  }
  if (message.content === "bc-ne!noob") {
    message.reply("You are a noob. Here is a picture of you. https://i.imgur.com/VMKuy8E.png")
  }
  if (message.content === "bc!embed-test") {
    message.channel.send({ embed: embedtest })
    message.channel.send('Text-only fallback')
  }
});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);
