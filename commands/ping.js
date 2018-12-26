const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
    await message.channel.send(`Server ${Date.now() - message.createdTimestamp}ms | API ${Math.round(client.ping)}ms`);
}

module.exports.help = {
    name: "ping",
    description: "Gets a ping",
    usage: "ping"
}