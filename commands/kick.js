const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
	let creatorRole = message.guild.roles.find("name", "Creator");
  let adminRole = message.guild.roles.find("name", "Admin");
  let modRole = message.guild.roles.find("name", "Mod");
  if(message.member.roles.has(creatorRole) || message.member.roles.has(adminRole) || message.member.roles.has(modRole)) return message.reply("Sorry, you do not have permission to run this command!");
	let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
		return message.reply("Please mention a valid member of this server");
    if(!member.kickable) 
		return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
	
	let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    // Now, time for a swift kick in the nuts!
    await member.kick(reason)
		.catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
		message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);
}

module.exports.help = {
    name: "kick",
    description: "kicks a user",
    usage: "kick [user] [reason]"
}