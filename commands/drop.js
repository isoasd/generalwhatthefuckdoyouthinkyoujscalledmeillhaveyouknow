const Discord = require("discord.js");

module.exports.run = async (bot, message, args, config) => {
    const landings = [
        "Wailing Woods", "Shifty Shafts",
        "Tomato Temple", "Greasy Grove",
        "Salty Springs", "Retail Row",
        "Dusty Divot", "Tilted Towers",
        "Junk Junction", "Haunted Hills",
        "Snobby Shores", "Lazy Links",
        "Risky Reels", "Lonely Lodge",
        "Paradise Palms", "Loot Lake",
        "Fatal Fields", "Flush Factory",
        "Pleasant Park "];
    let drop = landings[parseInt(Math.random() * landings.length)]

    const attachment = new Discord.Attachment(`./locations/${drop}.png`);
    let embed = new Discord.RichEmbed()
        .setAuthor(`Hey where am I dropping?`, message.guild.iconURL)
        .setDescription(`You should drop at ** ${drop}**`)
        //  .setDescription(`You should drop at ** ${drop}**.\n\n\nChest locations for ${drop} are shown below.`)
        .setFooter(`Requested by ${message.author.username}`)
        .setTimestamp()
        .setColor(0x62c1f0)
    message.channel.send(embed);
    // message.channel.send(attachment);
}

module.exports.help = {
    name: "drop"
}