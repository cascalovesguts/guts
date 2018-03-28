const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');

client.on('ready',() => {
	console.log('I\'m Online\nI\'m Online');
});

var prefix = "~"
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'im sad')) {
		message.channel.sendMessage('Things will get better.');
	}
});

var prefix = "~"
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'help me guts')) {
		message.channel.sendMessage('I will keep you safe.');
	}
});

var prefix = "~"
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'im tired')) {
		message.channel.sendMessage('Keep pushing ahead.');
	}
});

var prefix = "~"
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'i love you guts')) {
		message.channel.sendMessage('I love you too, ${member.user}.');
	}
});

var prefix = "~"
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'i feel bad')) {
		message.channel.sendMessage('Take time to care for yourself. Even the bravest warriors need a break once in a while.');
	}
});

var prefix = "~"
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'i want to')) {
		message.channel.sendMessage('You will achieve your dreams.');
	}
});

client.login(process.env.BOT_TOKEN);
