const Discord = module.require("discord.js");
const client = new Discord.Client();
const logs = "543566323834421248";
const prefix = process.env.PREFIX;
const version = process.env.VERSION;

module.exports.run = async (client, message, args) => {
	const embed = new Discord.RichEmbed()
	.setAuthor("Developer: aj2958#7948", "https://t0.rbxcdn.com/e25a771f37859b7c227944230596bae6")
	.setColor(0x00AE86)
	.addField("Scripting Language:", `JavaScript`)
	.addField("Servers:", client.guilds.map(g=>g.id).join(', '))
	.addField("Ping:", `Server ${Date.now() - message.createdTimestamp}ms | API ${Math.round(client.ping)}ms`)
	.addField("Created on:", `08 Febuary 2019`)
	.setFooter(`Version: ${version}`);
	message.channel.send({embed});
}

module.exports.help = {
    name: "about",
    description: "Gets info on the bot",
    usage: "about"
}
