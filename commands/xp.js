const Discord = module.require("discord.js");
const client = new Discord.Client();

module.exports.run = async (client, message, args) => {
	con.query(`SELECT * FROM xp WHERE id = '${message.author.id}'`, (err,rows) => {
		if(err) throw err;
		let xp = rows[0].xp;
		message.channel.send(xp);
	});
}

module.exports.help = {
    name: "createserver",
    description: "Announce message",
    usage: "createserver"
}