const Discord = module.require("discord.js");
const client = new Discord.Client();

module.exports.run = async (client, message, args) => {
	if (message.author.id !== '501649887411175435') return;
	client.channels.get("521873059204825172").send(`Bot Successfully Started.`);
    process.exit(1);
}

module.exports.help = {
    name: "restart",
    description: "Restarts the bot",
    usage: "restart"
}