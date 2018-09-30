const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});
const apikey = process.env.APIKEY;
const fs = require("fs");
const botconfig = require("./botconfig.json");
const token = process.env.BOT_TOKEN;


bot.commands = new Discord.Collection();
 
fs.readdir("./commands/", (err, files) => {
 
  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }
 
  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  bot.user.setStatus('available');
  bot.user.setActivity("!help para ayudarte", {type: "LISTENING"});
});


bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let banMSG = message.content.toUpperCase();
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

   let xpAdd = Math.floor(Math.random() * 7) + 8;
	
	const xp = require("./xp.json");
	if(!xp[message.author.id]){
	xp[message.author.id] = {
	xp: 0,
		level: 1
	};
	}
	
	let curxp = xp[message.author.id].xp;
	let curlvl = xp[message.author.id].level;
	let nxtLvl = xp[message.author.id].level * 300;
	xp[message.author.id].xp = curxp + xpAdd;
	
	if(nxtLvl <= xp[message.author.id].xp){
	if(message.channel.id === "486026246007029781") return;
	xp[message.author.id].level = curlvl + 1;
	let lvlup = new Discord.RichEmbed()
	.setTitle("Level Up")
	.setDescription("**Has subido de nivel!**")
	.addField("Tu nivel es! ", curlvl + 1)
	.setColor(6812512);
		
	message.reply(lvlup).then(msg => msg.delete(5000));

	}
	const fs = require("fs");
	fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
		
		if(err) console.log(err)
	});
	
	
	if(message.channel.id === "486681135619899412") {
		if(message.content || banMSG.includes(`!`)) {
			message.delete();
		}
	}
	// solo //
	if(message.channel.id === "486681400133681153" && message.member.roles.find(r => r.name === "Scrim Staff")){
		if(message.content.includes("solo")){
		message.delete();
		message.channel.send("------------------------------------------");
		let servericon = bot.user.displayAvatarURL;
		let hosticon = message.author.displayAvatarURL;
		let announcement = new Discord.RichEmbed()
		.setTitle("Anuncio!")
		.setThumbnail(servericon)
		.setDescription("**Unete a la cuenta atras para el proximo scrim SOLO en 5 minutos**")
		.addField("El Scrim SOLO estan por comenzar", "*Asegurate de unirte al canal de conversacion!*", true)
		.setFooter("Por favor este listo", hosticon)
		.setTimestamp()
		.setColor(16760937);
			
		await message.channel.send(announcement);
			
		message.channel.send("------------------------------------------");
		}
	   
	}

	// duo //
	if(message.channel.id === "486681400133681153" && message.member.roles.find(r => r.name === "Scrim Staff")){
		if(message.content.includes("duo")){
		message.delete();
		message.channel.send("------------------------------------------");
		let servericon = bot.user.displayAvatarURL;
		let hosticon = message.author.displayAvatarURL;
		let announcement = new Discord.RichEmbed()
		.setTitle("Anuncio!")
		.setThumbnail(servericon)
		.setDescription("**Unete a la cuenta atras para el proximo scrim DUO en 5 minutos**")
		.addField("El Scrim DUO estan por comenzar", "*Asegurate de unirte al canal de conversacion!*", true)
		.setFooter("Por favor este listo", hosticon)
		.setTimestamp()
		.setColor(16760937);
			
		await message.channel.send(announcement);
			
		message.channel.send("------------------------------------------");
		}
	   
	}
	
	// squad //
	if(message.channel.id === "486681400133681153" && message.member.roles.find(r => r.name === "Scrim Staff")){
		if(message.content.includes("squad")){
		message.delete();
		message.channel.send("------------------------------------------");
		let servericon = bot.user.displayAvatarURL;
		let hosticon = message.author.displayAvatarURL;
		let announcement = new Discord.RichEmbed()
		.setTitle("Anuncio!")
		.setThumbnail(servericon)
		.setDescription("**Unete a la cuenta atras para el proximo scrim SQUAD en 5 minutos**")
		.addField("El Scrim SQUAD estan por comenzar", "*Asegurate de unirte al canal de conversacion!*", true)
		.setFooter("Por favor este listo", hosticon)
		.setTimestamp()
		.setColor(16760937);
			
		await message.channel.send(announcement);
			
		message.channel.send("------------------------------------------");
		}
	   
	}
	
	
	if(message.channel.id === "486681158348701697"){
		if(message.content || banMSG.includes(`!`)){
			message.delete();
		}
	}
 
  
 
});
 
bot.on('guildMemberAdd', member => {
		let platChannel = member.guild.channels.find('name', 'starting');
		var role = member.guild.roles.find('name', 'Starter');

	member.addRole(role);
	
	
	member.guild.channels.find('name', 'starting').sendMessage(member.toString() + " Set region!").then(msg => msg.delete(500));
	platChannel.bulkDelete(1);
  
 
  
  
});





bot.login(token);
