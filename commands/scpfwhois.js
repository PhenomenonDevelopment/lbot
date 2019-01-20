const Discord = module.require("discord.js");
const client = new Discord.Client();
var roblox = require('roblox-js');
var groupId = '3503317'
const version = process.env.VERSION;

module.exports.run = async (client, message, args) => {
	var args = message.content.split(/[ ]+/)
	var username = args[1]
	if (username){
    	message.channel.send(`Checking ROBLOX for ${username}`)
    	roblox.getIdFromUsername(username)
			.then(function(id){
				roblox.getRankNameInGroup(groupId, id)
				.then(function(rank){
					roblox.getRankNameInGroup('3675887', id)
					.then(function(CH){
						roblox.getRankNameInGroup('3506964', id)
						.then(function(IA){
							roblox.getRankNameInGroup('3506961', id)
							.then(function(ISD){
								roblox.getRankNameInGroup('3533267', id)
								.then(function(TRS){
									roblox.getRankNameInGroup('3506874', id)
									.then(function(MTF){
										roblox.getRankNameInGroup('3506926', id)
										.then(function(SD){
											roblox.getRankNameInGroup('3506142', id)
											.then(function(AD){
												roblox.getRankNameInGroup('3507041', id)
												.then(function(EAT){
													roblox.getRankNameInGroup('3655098', id)
													.then(function(DOR){
														roblox.getRankNameInGroup('3506966', id)
														.then(function(EC){
															roblox.getRankNameInGroup('3506974', id)
															.then(function(ER){
																roblox.getRankNameInGroup('3506940', id)
																.then(function(MD){
																	roblox.getRankNameInGroup('3506940', id)
																	.then(function(SCD){
																		const embed = new Discord.RichEmbed()
																			.setColor(0x00AE86)
																			.addField("Username:", `${username}`)
																			.addField("SCPF:", `${rank}`)
																			.addField("CH:", `${CH}`)
																			.addField("IA:", `${IA}`)
																			.addField("ISD:", `${ISD}`)
																			.addField("TRS:", `${TRS}`)
																			.addField("MTF:", `${MTF}`)
																			.addField("SD:", `${SD}`)
																			.addField("AD:", `${AD}`)
																			.addField("E&T:", `${EAT}`)
																			.addField("DOR:", `${DOR}`)
																			.addField("EC:", `${EC}`)
																			.addField("ER:", `${ER}`)
																			.addField("MD:", `${MD}`)
																			.addField("SCD:", `${SCD}`)
																			.addField("Profile:", `http://www.roblox.com/users/${id}`)
																			.setFooter(`Version: ${version}`);
																		message.channel.send({embed});
																	})
																})
															})
														})
													})
												})
											})
										})
									})
								})
							})
						})
					})
				})
			}).catch(function(err){ 
				message.channel.send(`Sorry, but ${username} doesn't exist on ROBLOX.`)
			});
			} else {
				message.channel.send("Please enter a username.")
		}
	return;
}

module.exports.help = {
    name: "scpfwhois",
    description: "View info on a user",
    usage: "scpfwhois {user}"
}