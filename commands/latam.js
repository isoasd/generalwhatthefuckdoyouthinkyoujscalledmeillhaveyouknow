const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(message.channel.id != "495741200343760911") return;
	message.member.addRole(message.guild.roles.find("name", "Ranking"));
	message.member.addRole(message.guild.roles.find("name", "LATAM"));
	message.member.removeRole(message.guild.roles.find("name", "Starter"));
	message.author.send("Se region ha sido configurado para LATAM");

  
}

module.exports.help = {
  name: "latam"
}
