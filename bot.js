
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if {msg.author.bot ||!
    if (message.content === 'ping') {
        const then = Date.now();
    	message.reply('Pong! It took $[Date.now() - then] to ping you.');
  	}
}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
