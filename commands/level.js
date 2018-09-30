const Discord = require("discord.js");
const xp = require("../xp.json");
module.exports.run = async (bot, message, args) => {

if(args[0]) return;
	if(!xp[message.author.id]){
	xp[message.author.id] = {
		xp: 0,
		level: 1
	};
	}
	let curxp = xp[message.author.id].xp;
	let curlvl = xp[message.author.id].level;
	let nxtLvlXp = curlvl * 300;
	let difference = nxtLvlXp - curxp;
		
	let lvlEmbed = new Discord.RichEmbed()
	.setColor(7239035)
	.setTitle(`**Hey ${message.author.username}!**`)
	.setDescription("Este es un sistema de niveles basado en la charla.")
	.addField("Tu nivel actualmente es", `${curlvl} 👈`, true)
	.addField("Tu XP actualmente es", `${curxp} 👈`, true)
	.setFooter(`Solo necesitas ${difference} XP para subir de nivel!`, message.author.displayAvatarURL);
		
	message.reply(lvlEmbed);

  
}

module.exports.help = {
  name: "level"
}
