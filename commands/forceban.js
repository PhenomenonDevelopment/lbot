const Discord = module.require("discord.js");
const modlog = "521885446876299265";

module.exports.run = async (client, message, args) => {
    if(!message.member.roles.some(r=>["Developer"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    const Discord = require('discord.js');
	let member = args[0];
	if (isNaN(member)) return message.reply('Please give a user ID to ban');

	const modlogs = message.guild.channels.find('id', modlog);
	const reason = args.splice(1, args.length).join(' ') || `Awaiting moderator's input. Use ${guildSettings.prefix}reason ${caseNum} <reason>.`;

	message.guild.ban(member).then(() => {
		message.reply(`${member} has been force banned by ${message.author.tag} because: ${reason}`);
		if (!modlogs) return console.log('modLogChannel does not exist on this server');
		const embed = new Discord.RichEmbed()
			.setColor('RED')
			.setTitle('User force banned')
			.addField(`User`, `${member}`, true)
			.addField(`Moderator`, `${message.author.tag} (${message.author.id})`, true)
			.addField(`Reason`, `${reason}`, true)
		modlogs.send({ embed })
			.then(() => {
				client.log('log', `${message.guild.name}/#${message.channel.name} (${message.channel.id}): ${member} was force banned by ${message.author.tag} (${message.author.id})`, 'CMD');
			})
			.catch((err) => {
				console.log(err);
			});
	})
		.catch(error => message.reply(`Sorry, I couldn't ban because of : ${error}`));
}

module.exports.help = {
    name: "kick",
    description: "kicks a user",
    usage: "kick [user] [reason]"
}