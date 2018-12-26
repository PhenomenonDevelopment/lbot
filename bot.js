const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const http = require("http");
const express = require("express");
const app = express();//

const discord_token = process.env.TOKEN;
const prefix = process.env.PREFIX;
const modlogs = "527603893132197944";
const version = process.env.VERSION;

app.listen(process.env.PORT);
setInterval(() => {
http.get(`http://lusthaven-bot.herokuapp.com`);
}, 280000);

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
  if (!file.endsWith(".js")) return;
	const event = require(`./events/${file}`);
	let eventName = file.split(".")[0];
	client.on(eventName, event.bind(null, client));
	delete require.cache[require.resolve(`./events/${file}`)];
  });
});

client.on("message", async message => {
  if (message.author.bot) return;
  const embed = new Discord.RichEmbed()
	  .setAuthor("Action logger")
	  .setColor(0x00AE86)
	  .addField("Type:", `Message`)
	  .addField("Contents:",`*${message}*`)
	  .addField("Server:", `${message.guild.name}`)
	  .addField("Channel:", `${message.channel.name}`)
	  .setFooter(`Version: ${version}`);
  client.channels.get('527605713418059818').send({embed});
  if (message.content.indexOf(prefix) !== 0) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
	const embed = new Discord.RichEmbed()
	  .setAuthor("Command Logger")
	  .setColor(0x00AE86)
	  .addField("Command:", `*${command}*`)
	  .addField("Args:",`*${args}*`)
	  .addField("Server:", `${message.guild.name}`)
	  .addField("Channel:", `${message.channel.name}`)
	  .setFooter(`Version: ${version}`);
    client.channels.get(modlogs).send({embed});
  } catch (err) {
    console.error(err);
  }
});

client.login(discord_token);