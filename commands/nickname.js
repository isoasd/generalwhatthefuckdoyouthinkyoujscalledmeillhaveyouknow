const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(message.channel.id === "486026246007029781") return;
  
  let username = args.slice(0).join(" ");
		message.delete();
		if(!username) return message.channel.send("Por favor ingrese su nombre de Fortnite.").then(msg => msg.delete(2000));
		if(username.length > 16) return message.channel.send("Por favor SOLAMENTE nombre de Fornite.").then(msg => msg.delete(2000));
		if(username.includes("*")) return message.channel.send("No puedo hacer eso.").then(msg => msg.delete(2000));
		if(username.includes("[")) return message.channel.send("No puedo hacer eso.").then(msg => msg.delete(2000));
		if(username.includes("]")) return message.channel.send("No puedo hacer eso.").then(msg => msg.delete(2000));
		if(username.length < 3) return message.channel.send("No puedo hacer eso.").then(msg => msg.delete(2000));
		message.member.setNickname(username);
		message.reply(`¡Todo listo! Su apodo ha sido cambiado a"${username}"`).then(msg => msg.delete(2000));


  
}

module.exports.help = {
  name: "nickname"
}
