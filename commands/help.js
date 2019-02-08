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
	.addField(`Henti:`,``)
	.addField(`Boobs:`,``)
	.addField(`Dick:`,``)
	.addField(`Milf:`,``)
	.addField(`Penis:`,``)
	.addField(`Pornhub:`,``)
	.addField(`Gif:`,``)
	.addField(`Cosplay:`,``)
	.addField(`BBW:`,``)
	.addField(`Asian:`,``)
	.addField(`Amature:`,``)
	.addField(`Ass:`,``)
	.addField(`Pussy:`,``)
	.addField(`Henti:`,``)
	.addField(`Snapchat:`,``)
	.setFooter(`Version: ${version}`);
	message.channel.send({embed});
}

module.exports.help = {
    name: "help",
    description: "Return commands",
    usage: "help"
}
