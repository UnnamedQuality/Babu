

/*

  A ping pong bot, whenever you send "ping", it replies "pong".

*/



// Import the discord.js module

const Discord = require('discord.js');



// Create an instance of a Discord client

const client = new Discord.Client();



// Embed test

const quire = {
  "title": "Result",
  "description": "Hitler did nothing wrong! Image found on Google.",
  "color": 4407182,
  "timestamp": "2017-09-25T23:55:27.800Z",
  "footer": {
    "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
    "text": "ausch"
  },
  "image": {
    "url": "https://www.ushmm.org/lcmedia/photo/wlc/image/90/90326.jpg"
  }
};

const triggered = {
  "url": "https://giphy.com/gifs/ZEVc9uplCUJFu",
  "color": 213361,
  "timestamp": "2017-09-25T23:59:46.475Z",
  "image": {
    "url": "hhttps://giphy.com/gifs/ZEVc9uplCUJFu"
  }
};

const delivery = {
  "title": "Cookies & Cream Inc.",
  "description": "Here is your cookies and cream!",
  "color": 5140965,
  "timestamp": "2017-09-25T22:39:07.665Z",
  "footer": {
    "icon_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAPhvq67Li_1xmH8GtAwoE-WO6whJZWoNow6r-AROgWNrt5dqR",
    "text": "Cookies and cream delivery (Suggested by TheClickersDiscord#2994)"
  },
  "thumbnail": {
    "url": "http://www.chewoutloud.com/wp-content/uploads/2013/08/Cookies-n-Cream-Ice-Cream-2.jpg"
  }
};

const doritoerror = {
  "title": "Sorry!",
  "description": "This command is only available in Dorito's Land at this moment.",
  "color": 14510907,
  "timestamp": "2017-09-24T16:19:35.333Z",
  "footer": {
    "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
    "text": "Babu c:"
  },
  "thumbnail": {
    "url": "http://assets.nydailynews.com/polopoly_fs/1.1997367.1415033522!/img/httpImage/image.jpg_gen/derivatives/article_970/doritos4n-2-web.jpg"
  },
  "image": {
    "url": "https://tse3.mm.bing.net/th?id=OIP.G-5SI73CI82Ku92zlOiugAEMDp&pid=15.1&P=0&w=227&h=198"
  },
  "author": {
    "name": "PizzaVoteForBest#0128",
    "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
  }
};

const Drownedembed = {
  "title": "Oh no.",
  "description": "You have drowned!",
  "url": "https://cdn.discordapp.com/attachments/358977322214359042/361538590968381440/RobloxScreenShot20170924_174301142.png",
  "color": 14830710,
  "timestamp": "2017-09-24T15:49:15.835Z",
  "footer": {
    "icon_url": "https://t4.rbxcdn.com/160a228368a9f46ee8b9c0a06e975afb",
    "text": "You have drowned."
  },
  "thumbnail": {
    "url": "https://t4.rbxcdn.com/160a228368a9f46ee8b9c0a06e975afb"
  },
  "image": {
    "url": "https://cdn.discordapp.com/attachments/358977322214359042/361538590968381440/RobloxScreenShot20170924_174301142.png"
  },
  "author": {
    "name": "muhammed#3243",
    "url": "https://t4.rbxcdn.com/160a228368a9f46ee8b9c0a06e975afb",
    "icon_url": "https://t4.rbxcdn.com/160a228368a9f46ee8b9c0a06e975afb"
  }
};

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
      "value": "ping - The first of the first. \noof - Oof!\nreact - :thinking:\nilluminavi - Secret civilization.\nnoob - lel\nlennyoof - **NSFW** Lenny oof.\ndrowned - You have drowned.\nausch - **TRIGGER WARNING**",
      "inline": true
    },
    {
      "name": "Tools",
      "value": "gold - Get a **helpful** Discord Gold message.\nchips - Get the chips.\ncnc - Cookies and cream. Get it today!",
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
    "name": "diamondboy5860/Morty#3990",
    "url": "https://cdn.discordapp.com/attachments/360538338664644608/361531801036128266/Screen_Shot_2017-09-24_at_9.23.41_AM.png",
    "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
  }
};

const DiscordGoldError = {
  "description": "Sorry, you need [Discord Gold](discord.gold) to view this message.",
  "color": 12824520,
  "timestamp": "2017-09-24T16:08:23.098Z",
  "footer": {
    "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
    "text": "Babu c:"
  },
  "thumbnail": {
    "url": "https://cdn.discordapp.com/app-icons/271121829194629122/c35206c27b7085edfee31d6ba072f749.png"
  },
  "author": {
    "name": "PizzaVoteForBest#0128",
    "url": "https://discordapp.com",
    "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
  }
};



// The ready event is vital, it means that your bot will only start reacting to information

// from Discord _after_ ready is emitted

client.on('ready', () => {

  console.log('I am ready!');
  client.user.setPresence({  game: { name: 'b!help | v.11.02', type: 0 } });

});



// Create an event listener for messages

client.on('message', message => {
  
  // Return if the message is either by: a bot, or in DMs
  if (message.author.bot) return;
 if (!message.content === "b!help" && message.channel.type === "dm") return;
  // If the message is "ping"

  if (message.content === 'b!ping') {

    // Send "pong" to the same channel

    message.reply('pong!');

  }
   if (message.content === 'b!help') {
     message.react("👌")
     message.reply('I am sending help your way! Please check your DMs. 👍')
     message.author.sendMessage("⚠️ Warning! You are using the CANARY BUILD. Things can go wrong at any time.")
     message.author.sendMessage({ embed: helpEmbed })
     message.author.sendMessage("Can't see the help message? You can say bc-ne!help")
   }

  if (message.content === 'b-ne!help') {
     message.react("👌")
     message.reply('I am sending help your way! Please check your DMs. 👍')
     message.author.sendMessage("⚠️ Warning! You are using the CANARY BUILD. Things can go wrong at any time.\nThe prefix is bc-ne!\n Prefix for embeds is bc!\n**Babu commands: **\n")
    message.author.sendMessage("help - Commands and help.")
    message.author.sendMessage("hq - Sends a DM with an invite to the CarLua and UQ discords. (can use bc! without embed)")
     message.author.sendMessage("ping - Classics. (can use bc! without embed)")
     message.author.sendMessage("illuminavi - ILLUMINAVI!! (can use bc! without embed)")
     message.author.sendMessage("hello - Why can't I introduce myself? (can use bc! without embed)")
     message.author.sendMessage("react - 🤔 (can use bc! without embed)")
     message.author.sendMessage("**Babu FUN Commands: **\n oof- Oof! Requested by muhammed#3243.\n noob - LIVING LIFE OF NOOB I USE MAI GUN\n lennyoof - **NSFW**\ndrowned - Ben drowned.")
 
   }
  if (message.content === "b!illuminavi") {
    message.react("😧")
    message.channel.send("ILLUMINAVI CONFIRMED! https://i.imgur.com/92wjqvK.png")
}
  if (message.content === "b!hello") {
    message.channel.send("Hi, I am Jen, alias Babu. I am here to preform commands for you! I was set to preform by Carson Houdek and lua_html.")
      }
  if (message.content === "b!hq") {
    message.react("🔥")
    message.author.sendMessage("**CarLua HQ:** https://discord.gg/aKKwVEG")
    message.author.sendMessage("**UnnamedQuality:** https://discord.gg/c4yGwuQ")
      }
  if (message.content === "b!abuintro") {
    message.channel.send("Oh, it is my turn to preform? Well, thank you!\n Hello! I am Babu, real name Jen. This is my showroom, where I am supposed to preform!\n Say b!community to view community commands, for this server only. Thank you! 🔥")
  }
  if (message.content === "b!react") {
    message.react("😂")
  }
  if (message.content === "b!pong") {
    message.react("🔔")
    message.react("😂")
    message.react("🔥")
    message.react("😧")
    message.react("👌")
    message.react("🤔")
    message.react("👍")
    message.reply("u has discovered hidden secrets!\n here are mai emojissss!!!")
  }
  if (message.content === "b!oof") {
    message.react("💀")
    message.reply({ embed: deathOOF })
  }
  if (message.content === "b-ne!oof") {
    message.react("💀")
    message.reply("oof! https://i.imgur.com/EXSdJ9l.png")
  }
  if (message.content === "b!noob") {
    message.reply({ embed: noobembed })
  }
  if (message.content === "b!lennyoof") {
    message.reply({ embed: lennyOOFembed })
  }
  if (message.content === "b!drowned") {
    message.reply({ embed: Drownedembed })
  }
  if (message.content === "b!gold") {
    message.reply({ embed: DiscordGoldError })
  }
  if (message.content === "b!trig") {
    message.reply({ embed: triggered })
  }
  if (message.content === "b!ausch") {
    message.reply({ embed: quire })
  }
  if (message.content === "b!cnc") {
    message.react("🍱")
    message.reply({ embed: delivery })
  }
  if (message.content === "b!chips") {
    message.reply({ embed: doritoerror })
  }
  if (message.content === "b-ne!lennyoof") {
    message.reply("lenny oof")
  }
   if (message.content === "b-ne!drowned") {
    message.reply("You have drowned.")
  }
  if (message.content === "b-ne!noob") {
    message.reply("You are a noob. Here is a picture of you. https://i.imgur.com/VMKuy8E.png")
  }
  if (message.content === "b!embed-test") {
    message.channel.send({ embed: embedtest })
    message.channel.send('Text-only fallback')
  }
});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);

  "color": 5140965,
  "timestamp": "2017-09-25T22:39:07.665Z",
  "footer": {
    "icon_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAPhvq67Li_1xmH8GtAwoE-WO6whJZWoNow6r-AROgWNrt5dqR",
    "text": "Cookies and cream delivery (Suggested by TheClickersDiscord#2994)"
  },
  "thumbnail": {
    "url": "http://www.chewoutloud.com/wp-content/uploads/2013/08/Cookies-n-Cream-Ice-Cream-2.jpg"
  }
};

const doritoerror = {
  "title": "Sorry!",
  "description": "This command is only available in Dorito's Land at this moment.",
  "color": 14510907,
  "timestamp": "2017-09-24T16:19:35.333Z",
  "footer": {
    "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
    "text": "Babu c:"
  },
  "thumbnail": {
    "url": "http://assets.nydailynews.com/polopoly_fs/1.1997367.1415033522!/img/httpImage/image.jpg_gen/derivatives/article_970/doritos4n-2-web.jpg"
  },
  "image": {
    "url": "https://tse3.mm.bing.net/th?id=OIP.G-5SI73CI82Ku92zlOiugAEMDp&pid=15.1&P=0&w=227&h=198"
  },
  "author": {
    "name": "PizzaVoteForBest#0128",
    "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
  }
};

const Drownedembed = {
  "title": "Oh no.",
  "description": "You have drowned!",
  "url": "https://cdn.discordapp.com/attachments/358977322214359042/361538590968381440/RobloxScreenShot20170924_174301142.png",
  "color": 14830710,
  "timestamp": "2017-09-24T15:49:15.835Z",
  "footer": {
    "icon_url": "https://t4.rbxcdn.com/160a228368a9f46ee8b9c0a06e975afb",
    "text": "You have drowned."
  },
  "thumbnail": {
    "url": "https://t4.rbxcdn.com/160a228368a9f46ee8b9c0a06e975afb"
  },
  "image": {
    "url": "https://cdn.discordapp.com/attachments/358977322214359042/361538590968381440/RobloxScreenShot20170924_174301142.png"
  },
  "author": {
    "name": "muhammed#3243",
    "url": "https://t4.rbxcdn.com/160a228368a9f46ee8b9c0a06e975afb",
    "icon_url": "https://t4.rbxcdn.com/160a228368a9f46ee8b9c0a06e975afb"
  }
};

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
  "description": "The prefix is b!",
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
    "name": "Babu",
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
      "value": "ping - The first of the first. \noof - Oof!\nreact - :thinking:\nilluminavi - Secret civilization.\nnoob - lel\nlennyoof - **NSFW** Lenny oof.\ndrowned - You have drowned.\nausch - **TRIGGER WARNING**",
      "inline": true
    },
    {
      "name": "Tools",
      "value": "gold - Get a **helpful** Discord Gold message.\nchips - Get the chips.\ncnc - Cookies and cream. Get it today!",
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
    "name": "diamondboy5860/Morty#3990",
    "url": "https://cdn.discordapp.com/attachments/360538338664644608/361531801036128266/Screen_Shot_2017-09-24_at_9.23.41_AM.png",
    "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
  }
};

const DiscordGoldError = {
  "description": "Sorry, you need [Discord Gold](discord.gold) to view this message.",
  "color": 12824520,
  "timestamp": "2017-09-24T16:08:23.098Z",
  "footer": {
    "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
    "text": "Babu c:"
  },
  "thumbnail": {
    "url": "https://cdn.discordapp.com/app-icons/271121829194629122/c35206c27b7085edfee31d6ba072f749.png"
  },
  "author": {
    "name": "PizzaVoteForBest#0128",
    "url": "https://discordapp.com",
    "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
  }
};



// The ready event is vital, it means that your bot will only start reacting to information

// from Discord _after_ ready is emitted

client.on('ready', () => {

  console.log('I am ready!');
  client.user.setPresence({ game: { name: 'c!help | v.11.02', type: 0 } });

});



// Create an event listener for messages

client.on('message', message => {
  
  // Return if the message is either by: a bot, or in DMs
  if (message.author.bot) return;
 if (message.channel.type === "dm") return;
  // If the message is "ping"

  if (message.content === 'b!ping') {

    // Send "pong" to the same channel

    message.reply('pong!');

  }
   if (message.content === 'b!help') {
     message.react("⚠️")
     message.reply('I am sending help your way! Please check your DMs. 👍')
     message.author.sendMessage("⚠️ Warning! You are using the CANARY BUILD. Things can go wrong at any time.")
     message.author.sendMessage({ embed: helpEmbed })
     message.author.sendMessage("Can't see the help message? You can say bc-ne!help")
   }

  if (message.content === 'b-ne!help') {
     message.react("⚠️")
     message.reply('I am sending help your way! Please check your DMs. 👍')
     message.author.sendMessage("⚠️ Warning! You are using the CANARY BUILD. Things can go wrong at any time.\nThe prefix is bc-ne!\n Prefix for embeds is bc!\n**Babu commands: **\n")
    message.author.sendMessage("help - Commands and help.")
    message.author.sendMessage("hq - Sends a DM with an invite to the CarLua and UQ discords. (can use bc! without embed)")
     message.author.sendMessage("ping - Classics. (can use bc! without embed)")
     message.author.sendMessage("illuminavi - ILLUMINAVI!! (can use bc! without embed)")
     message.author.sendMessage("hello - Why can't I introduce myself? (can use bc! without embed)")
     message.author.sendMessage("react - 🤔 (can use bc! without embed)")
     message.author.sendMessage("**Babu FUN Commands: **\n oof- Oof! Requested by muhammed#3243.\n noob - LIVING LIFE OF NOOB I USE MAI GUN\n lennyoof - **NSFW**\ndrowned - Ben drowned.")
 
   }
  if (message.content === "b!illuminavi") {
    message.react("😧")
    message.channel.send("ILLUMINAVI CONFIRMED! https://i.imgur.com/92wjqvK.png")
}
  if (message.content === "b!hello") {
    message.channel.send("Hi, I am Jen, alias Babu. I am here to preform commands for you! I was set to preform by Carson Houdek and lua_html.")
      }
  if (message.content === "b!hq") {
    message.react("🔥")
    message.author.sendMessage("**CarLua HQ:** https://discord.gg/aKKwVEG")
    message.author.sendMessage("**UnnamedQuality:** https://discord.gg/c4yGwuQ")
      }
  if (message.content === "b!abuintro") {
    message.channel.send("Oh, it is my turn to preform? Well, thank you!\n Hello! I am Babu, real name Jen. This is my showroom, where I am supposed to preform!\n Say b!community to view community commands, for this server only. Thank you! 🔥")
  }
  if (message.content === "b!react") {
    message.react("😂")
  }
  if (message.content === "b!pong") {
    message.react("🔔")
    message.react("😂")
    message.react("🔥")
    message.react("😧")
    message.react("👌")
    message.react("🤔")
    message.react("👍")
    message.reply("u has discovered hidden secrets!\n here are mai emojissss!!!")
  }
  if (message.content === "b!oof") {
    message.react("💀")
    message.reply({ embed: deathOOF })
  }
  if (message.content === "b-ne!oof") {
    message.react("💀")
    message.reply("oof! https://i.imgur.com/EXSdJ9l.png")
  }
  if (message.content === "b!noob") {
    message.reply({ embed: noobembed })
  }
  if (message.content === "b!lennyoof") {
    message.reply({ embed: lennyOOFembed })
  }
  if (message.content === "b!drowned") {
    message.reply({ embed: Drownedembed })
  }
  if (message.content === "b!gold") {
    message.reply({ embed: DiscordGoldError })
  }
  if (message.content === "b!trig") {
    message.reply({ embed: triggered })
  }
  if (message.content === "b!ausch") {
    message.reply({ embed: quire })
  }
  if (message.content === "b!cnc") {
    message.react("🍱")
    message.reply({ embed: delivery })
  }
  if (message.content === "b!chips") {
    message.reply({ embed: doritoerror })
  }
  if (message.content === "b-ne!lennyoof") {
    message.reply("lenny oof")
  }
   if (message.content === "b-ne!drowned") {
    message.reply("You have drowned.")
  }
  if (message.content === "b-ne!noob") {
    message.reply("You are a noob. Here is a picture of you. https://i.imgur.com/VMKuy8E.png")
  }
  if (message.content === "b!embed-test") {
    message.channel.send({ embed: embedtest })
    message.channel.send('Text-only fallback')
  }
});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);

      "name": "Line 5",
      "value": "are inline fields",
      "inline": true
    }
  ]
};

const helpEmbed = {
  "title": "Help system",
  "description": "The prefix is b!",
  "color": 901366,
  "footer": {
    "icon_url": "https://i.imgur.com/3c9zbVq.png",
    "text": "Babu Help System"
  },
  "thumbnail": {
    "url": "https://i.imgur.com/3c9zbVq.png"
  },
  "author": {
    "name": "Babu (Canary)",
    "url": "https://discordapp.com",
    "icon_url": "https://i.imgur.com/3c9zbVq.png"
  },
  "fields": [
    {
      "name": "Information",
      "value": "hq - Links to UQ & CL. \nhelp - See this message.\n",
      "inline": true
    },
    {
      "name": "Fun",
      "value": "ping - The first of the first. \noof - Oof!\nreact - :thinking:\nilluminavi - Secret civilization.",
      "inline": true
    }
  ]
};

const deathOOF = {
  "title": "Roblox death sound",
  "description": "Oof!",
  "color": 15864217,
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

// The ready event is vital, it means that your bot will only start reacting to information

// from Discord _after_ ready is emitted

client.on('ready', () => {

  console.log('I am ready!');
  client.user.setPresence({ game: { name: 'b!help | v.11.01', type: 0 } });

});



// Create an event listener for messages

client.on('message', message => {

  // If the message is "ping"

  if (message.content === 'b!ping') {

    // Send "pong" to the same channel

    message.reply('pong!');

  }
   if (message.content === 'b!help') {
     message.react("👌")
     message.reply('I am sending help your way! Please check your DMs. 👍')
     message.author.sendMessage({ embed: helpEmbed })
     message.author.sendMessage("Can't see the help message? You can say b-ne!help")
   }
   if (message.content === 'b-ne!help') {
     message.react("👌")
     message.reply('I am sending help your way! Please check your DMs. 👍')
     message.author.sendMessage("The prefix is b-ne!\n Prefix for embeds is b!\n**Babu commands: **\n")
    message.author.sendMessage("help - Commands and help.")
    message.author.sendMessage("hq - Sends a DM with an invite to the CarLua and UQ discords. (can use b! without embed)")
     message.author.sendMessage("ping - Classics. (can use bc! without embed)")
     message.author.sendMessage("illuminavi - ILLUMINAVI!! (can use bc! without embed)")
     message.author.sendMessage("hello - Why can't I introduce myself? (can use b! without embed)")
     message.author.sendMessage("react - 🤔 (can use bc! without embed)")
     message.author.sendMessage("**Babu FUN Commands: **\n oof- Oof! Requested by muhammed#3243.")
 
   }
  if (message.content === "b!illuminavi") {
    message.react("😧")
    message.channel.send("ILLUMINAVI CONFIRMED! https://i.imgur.com/92wjqvK.png")
}
  if (message.content === "b!hello") {
    message.channel.send("Hi, I am Jen, alias Babu. I am here to preform commands for you! I was set to preform by Carson Houdek and lua_html.")
      }
  if (message.content === "b!hq") {
    message.react("🔥")
    message.author.sendMessage("**CarLua HQ:** https://discord.gg/aKKwVEG")
    message.author.sendMessage("**UnnamedQuality:** https://discord.gg/c4yGwuQ")
      }
  if (message.content === "b!abuintro") {
    message.channel.send("Oh, it is my turn to preform? Well, thank you!\n Hello! I am Babu, real name Jen. This is my showroom, where I am supposed to preform!\n Say b!community to view community commands, for this server only. Thank you! 🔥")
  }
  if (message.content === "b!react") {
    message.react("😂")
  }
  if (message.content === "b!pong") {
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
  if (message.content === "b!oof") {
    message.react("💀")
    message.reply({ embed: deathOOF })
  }
  if (message.content === "b-ne!oof") {
    message.react("💀")
    message.reply("oof! https://i.imgur.com/EXSdJ9l.png")
  }
  if (message.content === "b!embed-test") {
    message.channel.send({ embed: embedtest })
    message.channel.send('Text-only fallback')
  }
});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);

