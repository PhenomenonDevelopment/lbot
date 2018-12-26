const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let serverembed = new Discord.RichEmbed()
  .setTitle("Server Information")
  .setColor("0ED4DA")
  .setThumbnail(message.guild.iconURL)
  .addField('Name', `${message.guild.name} (${message.guild.nameAcronym})`)
  .addField('Server Owner', message.guild.owner.user.tag)
  .addField("Server Create Date", message.guild.createdAt)
  .addField("Member Count", message.guild.memberCount)
  .addField("Server ID", message.guild.id)
  
  return message.channel.send(serverembed);
}


module.exports.help = {
  name: "serverinfo",
  description: "Gathers information about the server."
}