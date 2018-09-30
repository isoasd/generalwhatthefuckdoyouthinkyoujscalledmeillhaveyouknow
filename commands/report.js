const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(message.channel.id === "486681135619899412") return;
	if(message.channel.id === "486681158348701697") return;

	let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	if(!rUser) return message.channel.send("No se pudo encontrar el usuario especificado.");
	
	let reason = args.join(" ").slice(22);

	let reportEmbed = new Discord.RichEmbed()
	.setDescription("Reportes")
	.setColor(6812512)
	.addField("Usuario informado", `${rUser} con ID: ${rUser.id}`)
	.addField("Reportado por", `${message.author} con ID: ${message.author.id}`)
	.addField("Canal", message.channel)
	.addField("Tiempo", message.createdAt)
	.addField("Razon", reason);


	let reportschannel = message.guild.channels.find(`name`, "reports");
	if(!reportschannel) return message.channel.send("	No se pudo encontrar el canal de reportes");
	
	message.delete().catch(O_o=>{});
	message.reply("¡Tu reporte ha sido enviado!");
	reportschannel.send(reportEmbed);
  
  
}

module.exports.help = {
  name: "report"
}
