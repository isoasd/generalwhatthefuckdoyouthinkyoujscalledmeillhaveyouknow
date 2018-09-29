const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

		if(message.channel.id === "486681135619899412") return;
		if(message.channel.id === "486681158348701697") return;
    if(message.channel.id === "486026246007029781") return;

	let sicon = message.guild.iconURL;
	let serverembed = new Discord.RichEmbed()
	.setColor(6812512)
	.setThumbnail(sicon)
	.addField("Nombre del Servidor", message.guild.name, true)
	.addField("Creado en", message.guild.createdAt, true)
	.addField("Te uniste", message.member.joinedAt, true)
	.addField("Tu", message.author, false);



	return message.channel.send(serverembed);

  
}

module.exports.help = {
  name: "info"
}
