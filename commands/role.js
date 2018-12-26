const Discord = module.require("discord.js");
const client = new Discord.Client();

module.exports.run = async (client, message, args) => {
  let creatorRole = message.guild.roles.find("name", "Creator");
  let adminRole = message.guild.roles.find("name", "Admin");
  let modRole = message.guild.roles.find("name", "Mod");
  if(message.member.roles.has(creatorRole) || message.member.roles.has(adminRole) || message.member.roles.has(modRole)) return message.reply("Sorry, you do not have permission to run this command!");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Couldn't find that user, yo.");
  let role = args[1];
  if(!role) return message.reply("Specify a role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Couldn't find that role.");

  if(rMember.roles.has(gRole.id)) return message.reply("They already have that role.");
  await(rMember.addRole(gRole.id));

  try{
    await rMember.send(`Congrats, you have been given the role ${gRole.name}`)
  }catch(e){
    message.channel.send(`Congrats to <@${rMember.id}>, they have been given the role ${gRole.name}. We tried to DM them, but their DMs are locked.`)
  }
}

module.exports.help = {
    name: "role"
}