const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
if(message.channel.id === "486026246007029781") return;
	if(message.channel.id === "486681135619899412") return;
		if(message.channel.id === "486681158348701697") return;

	let helpEmbed = new Discord.RichEmbed()
	.addField("!help", "Comando de ayuda", true)
   	.addField("!invite", "Obtener un link de invitacion", true)
    .addField("!report", "Reportar jugador", true)
    .addField("!info", "Mostrar informacion", true)
	.addField("!fn", "Estadisticas de Fortnite")
	.addField("!drop", "Te dira una ubicacion en donde caer")
	.setFooter("Estos son todos los comandos por ahora!")
   	.setColor(6812512);

	message.channel.sendEmbed(helpEmbed);
  
}

module.exports.help = {
  name: "help"
}
