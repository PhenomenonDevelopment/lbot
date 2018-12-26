const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
	if(!message.member.roles.some(r=>["Developer"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    const deleteCount = parseInt(args[0], 10);
	
    if(!deleteCount || deleteCount < 2 || deleteCount > 1000)
		return message.reply("Please provide a number between 2 and 1000 for the number of messages to delete");
	
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
		.catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
}

module.exports.help = {
    name: "purge",
    description: "Purge Messages",
    usage: "purge [amount]"
}