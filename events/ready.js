const prefix = process.env.PREFIX;
const version = process.env.VERSION;
module.exports = (client) => {
	client.user.setPresence({ game: { name: `${prefix}help | V${version}`, type: 0} });
}//