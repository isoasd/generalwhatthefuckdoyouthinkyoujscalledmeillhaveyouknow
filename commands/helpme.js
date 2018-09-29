const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(message.channel.id != "486681158348701697") return;
 message.author.send("Su nombre y rango no se han establecido, póngase en contacto con un administrador para obtener ayuda.");
		message.member.addRole(message.guild.roles.find("name", "Scrimmer"));
		message.member.removeRole(message.guild.roles.find("name", "Ranking"));

  
}

module.exports.help = {
  name: "helpme"
}
