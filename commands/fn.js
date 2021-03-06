const Discord = require("discord.js"); 

module.exports.run = async (bot, message, args) => {
	const Client = require("fortnite");
	const fortnite = new Client(process.env.APIKEY);


  if(message.channel.id === "486026246007029781") return;
  if(message.channel.id === "496203607419387904") return;
  if(message.channel.id === "486681158348701697") return;

	if(message.channel.id === "486681135619899412") return;
	
	
	let username = args.slice(1).join(" ") || message.member.nickname;
	let platform = "pc";
	let gamemode = args[0] || "lifetime";
		
	if(!args[0]) return message.reply("Format !fn <solo,duo,squad,lifetime> <username>") && message.channel.send("To set your rank type !fn solo (your fortnite name) WITHOUT the brackets!");
		
	const apikey = process.env.APIKEY;


	if(args[0] === "help") return message.reply("Format !fn <solo, duo, squad, lifetime> <username>");
	
	if(args[0] != "lifetime" && args[0] != "solo" && args[0] != "duo" && args[0] != "squad") return message.reply("Format !fn <solo,duo,squad,lifetime> <username>");	
		
		let data = fortnite.user(username, platform).then(data => {
			let stats = data.stats;
			
			if(gamemode === `solo`) {
				let solostats = stats.solo;
				let score = solostats.score;
				let kd = solostats.kd
				let matches = solostats.matches;
				let kills = solostats.kills;
				let wins = solostats.wins;
				let player = data.username;
				
				let soloEmbed = new Discord.RichEmbed()
				.setTitle("**TRN Solo Stats**")
				.setAuthor(`Stats for ${data.username}`)
				.setColor(6812512)
				.addField("Wins", wins ,true)
				.addField("Kills", kills ,true)
				.addField("Score", score ,true)
				.addField("Matches Played", matches ,true)
				.addField("KD Ratio", kd ,true)
				.addField("Player", player, true);

				
				if(kd >= 5 && kd < 10 && username === message.member.nickname){
                   	 message.member.addRole(message.guild.roles.find("name", "Insane"));
		   	 message.member.removeRole(message.guild.roles.find("name", "Pros"));
			message.member.removeRole(message.guild.roles.find("name", "Great"));
			message.member.removeRole(message.guild.roles.find("name", "Skilled"));
			message.member.removeRole(message.guild.roles.find("name", "Decent"));
			message.member.removeRole(message.guild.roles.find("name", "Noob"));
			message.author.send("Your rank has been set to **Insane**!");

             	   	}else if(kd >= 10 && username === message.member.nickname) {
				 message.member.addRole(message.guild.roles.find("name", "Pros"));
		   	 message.member.removeRole(message.guild.roles.find("name", "Insane"));
			message.member.removeRole(message.guild.roles.find("name", "Great"));
			message.member.removeRole(message.guild.roles.find("name", "Skilled"));
			message.member.removeRole(message.guild.roles.find("name", "Decent"));
			message.member.removeRole(message.guild.roles.find("name", "Noob"));
			message.author.send("Your rank has been set to **Pros**!");

				 }else if(kd >= 2 && kd < 3 && username === message.member.nickname) {
					  message.member.addRole(message.guild.roles.find("name", "Skilled"));
		   	 message.member.removeRole(message.guild.roles.find("name", "Pros"));
			message.member.removeRole(message.guild.roles.find("name", "Insane"));
			message.member.removeRole(message.guild.roles.find("name", "Great"));
			message.member.removeRole(message.guild.roles.find("name", "Decent"));
			message.member.removeRole(message.guild.roles.find("name", "Noob"));
			message.author.send("Your rank has been set to **Skilled**!");
					  }else if(kd < 2 && kd > 1 && username === message.member.nickname)  {
						   message.member.addRole(message.guild.roles.find("name", "Decent"));
		   	 message.member.removeRole(message.guild.roles.find("name", "Pros"));
			message.member.removeRole(message.guild.roles.find("name", "Insane"));
			message.member.removeRole(message.guild.roles.find("name", "Great"));
			message.member.removeRole(message.guild.roles.find("name", "Skilled"));
			message.member.removeRole(message.guild.roles.find("name", "Noob"));
			message.author.send("Your rank has been set to **Decent**!");
						   }else if(kd <= 1 && username === message.member.nickname) {
							    message.member.addRole(message.guild.roles.find("name", "Noob"));
		   	 message.member.removeRole(message.guild.roles.find("name", "Pros"));
			message.member.removeRole(message.guild.roles.find("name", "Insane"));
			message.member.removeRole(message.guild.roles.find("name", "Great"));
			message.member.removeRole(message.guild.roles.find("name", "Skilled"));
			message.member.removeRole(message.guild.roles.find("name", "Decent"));
			message.author.send("Your rank has been set to **Noob**!");
							    }else if(kd >= 3 && kd < 5 && username === message.member.nickname){
								    message.member.addRole(message.guild.roles.find("name", "Great"));
		   	 message.member.removeRole(message.guild.roles.find("name", "Pros"));
			message.member.removeRole(message.guild.roles.find("name", "Insane"));
			message.member.removeRole(message.guild.roles.find("name", "Skilled"));
			message.member.removeRole(message.guild.roles.find("name", "Decent"));
			message.member.removeRole(message.guild.roles.find("name", "Noob"));
			message.author.send("Your rank has been set to **Great**!");
								     
								     }
			
			
				
				
						if(kd >= 5 && kd < 10){
				
                   	 message.reply(`${data.username} is in the **INSANE** rank!`);
             	   	}else if(kd >= 10) {
				message.reply(`${data.username} is in the **PROs** rank!`);
				 }else if(kd >= 2 && kd < 3) {
					 message.reply(`${data.username} is in the **SKILLED** rank!`);
					  }else if(kd < 2 && kd > 1)  {
						 message.reply(`${data.username} is in the **DECENT** rank!`);
						   }else if(kd <= 1) {
							  message.reply(`${data.username} is in the **NOOB** rank!`);
							    }else if(kd >= 3 && kd < 5){
								   message.reply(`${data.username} is in the **GREAT** rank!`);
								     
								     }
              	 
				
				return message.channel.send(soloEmbed);
			}else if(gamemode === `duo`){
				let duostats = stats.duo;
				let score = duostats.score;
				let kd = duostats.kd;
				let matches = duostats.matches;
				let kills = duostats.kills;
				let wins = duostats.wins;
				
				let duoEmbed = new Discord.RichEmbed()
				.setTitle("**TRN Duo Stats**")
				.setAuthor(`Stats for ${data.username}`)
				.setColor(6812512)
				.addField("Wins", wins ,true)
				.addField("Kills", kills ,true)
				.addField("Score", score ,true)
				.addField("Matches Played", matches ,true)
				.addField("KD Ratio", kd ,true);
				
				message.reply("Your rank is set based on **SOLO** stats.");
				return message.channel.send(duoEmbed);
			}else if(gamemode === `squad`) {
				let squadstats = stats.squad;
				let score = squadstats.score;
				let kd = squadstats.kd;
				let matches = squadstats.matches;
				let kills = squadstats.kills;
				let wins = squadstats.wins;
				
				let squadEmbed = new Discord.RichEmbed()
				.setTitle("**TRN Squad Stats**")
				.setAuthor(`Stats for ${data.username}`)
				.setColor(6812512)
				.addField("Wins", wins ,true)
				.addField("Kills", kills ,true)
				.addField("Score", score ,true)
				.addField("Matches Played", matches ,true)
				.addField("KD Ratio", kd ,true);
				
				message.reply("Your rank is set based on **SOLO** stats.");

				return message.channel.send(squadEmbed);
			}else{
				let lifetime = stats.lifetime;
				let score = lifetime[6]["Score"];
				let mplayed = lifetime[7]["Matches Played"];
				let wins = lifetime[8]["Wins"];
				let winper = lifetime[9]["Win Percentage"];
				let kills = lifetime[10]["Kills"];
				let kd = lifetime[11]["KD Ratio"];
				
				let lifetimeEmbed = new Discord.RichEmbed()
				.setTitle("**TRN Lifetime Stats**")
				.setAuthor(`Stats for ${data.username}`)
				.setColor(6812512)
				.addField("Wins", wins, true)
				.addField("Kills", kills, true)
				.addField("Score", score, true)
				.addField("Matches Played", mplayed, true)
				.addField("KD Ratio", kd, true)
				.addField("Win Percentage", winper, true);
				
				message.reply("Your rank is set based on **SOLO** stats.");

				
				return message.channel.send(lifetimeEmbed);
			}
		
								  
		}).catch(e => {
			console.log(e);
			message.channel.send("Couldnt find username!")
		});
		


  
}

module.exports.help = {
  name: "fn"
}
