const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
	let creatorRole = message.guild.roles.find("name", "Creator");
  let adminRole = message.guild.roles.find("name", "Admin");
  let modRole = message.guild.roles.find("name", "Mod");
  if(message.member.roles.has(creatorRole) || message.member.roles.has(adminRole) || message.member.roles.has(modRole)) return message.reply("Sorry, you do not have permission to run this command!");
    const deleteCount = parseInt(args[0], 10);
	
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
		return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
	
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
		.catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
}

module.exports.help = {
    name: "purge",
    description: "Purge Messages",
    usage: "purge [amount]"
}