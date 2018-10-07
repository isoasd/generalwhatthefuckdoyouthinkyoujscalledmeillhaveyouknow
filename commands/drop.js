const Discord = require("discord.js");

module.exports.run = async (bot, message, args, config) => {

    if(message.channel.id === "486026246007029781") return;
    if(message.channel.id === "496203607419387904") return;
    if(message.channel.id === "486681158348701697") return;  
    if(message.channel.id === "486681135619899412") return;

    const landings = [
        "Alameda Aullante", "Tuneles Tortuosos",
        "Templo Tomate", "Caserio Colesterol",
        "Señorio de la Sal", "Ciudad Comercio",
        "Socavon Soterrado", "Pisos Picados",
        "Chiringuito Chatarra", "Lomas Lugubres",
        "Ribera Repipi", "Sociedad Sibarita",
        "Carretes Comprometidos", "Soto Solitario",
        "Oasis Ostentoso", "Aterrizaje Afortunado",
        "Latifundio Letal", "Industrias Inodoras",
        "Parque Placentero", "Pueblo Vikingo",
        "Ex Balsa Botin", "Isla Flotante"];
    let drop = landings[parseInt(Math.random() * landings.length)]

    const attachment = new Discord.Attachment(`./locations/${drop}.png`);
    let embed = new Discord.RichEmbed()
        .setAuthor(`Hey donde estoy cayendo?`, message.guild.iconURL)
        .setDescription(`Deberías caer en ** ${drop}**`)
        //  .setDescription(`You should drop at ** ${drop}**.\n\n\nChest locations for ${drop} are shown below.`)
        .setFooter(`Solicitado por ${message.author.username}`)
        .setTimestamp()
        .setColor(0x62c1f0)
    message.channel.send(embed);
    //message.channel.send(attachment);
}

module.exports.help = {
    name: "drop"
}