const Discord = module.require("discord.js");
const prefix = process.env.PREFIX;
const version = process.env.VERSION;

module.exports.run = async (client, message, args) => {
	const embed = new Discord.RichEmbed()
	.setColor("#ff921e")
	.addField(`Bot-Prefix:`, `${prefix}`)
	.addField(`Kick [user] [reason]:`, `Kicks the specified user`)
	.addField(`Ban [user] [reason]:`, `Bans the specified user`)
	.addField(`Ping:`, `Returns ping to the bot`)
	.addField(`About:`, `Returns information about the bot.`)
	.addField(`Henti:`,`NSFW`)
	.addField(`Boobs:`,`NSFW`)
	.addField(`Dick:`,`NSFW`)
	.addField(`Milf:`,`NSFW`)
	.addField(`Penis:`,`NSFW`)
	.addField(`Pornhub:`,`NSFW`)
	.addField(`Gif:`,`NSFW`)
	.addField(`Cosplay:`,`NSFW`)
	.addField(`BBW:`,`NSFW`)
	.addField(`Asian:`,`NSFW`)
	.addField(`Amature:`,`NSFW`)
	.addField(`Ass:`,`NSFW`)
	.addField(`Pussy:`,`NSFW`)
	.addField(`Henti:`,`NSFW`)
	.addField(`Snapchat:`,`NSFW`)
	.setFooter(`Version: ${version}`);
	message.channel.send({embed});
}

module.exports.help = {
    name: "help",
    description: "Return commands",
    usage: "help"
}
