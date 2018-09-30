const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 if(!message.member.roles.find(r => r.name === "Scrim Staff")) return;
	
  message.channel.bulkDelete(10);
	message.channel.send("Se reiniciara por pocas coincidencias").then(msg => msg.delete(10000));

  
}

module.exports.help = {
  name: "restart"
}
