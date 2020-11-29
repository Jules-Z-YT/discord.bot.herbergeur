const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

        let UserEmbed = new Discord.MessageEmbed()
        .setAuthor(message.guild.name)
        .setThumbnail(message.guild.iconURL({format: 'png', dynamic: true, size: 1024}))
        .addField(`Nom du serveur`,`${message.guild.name}`)
        .addField(`Propriétaire du serveur`,message.guild.owner)
        .addField(`Nombre de membres`,message.guild.memberCount)
        .addField(`Nombre de rôle`,message.guild.roles.cache.size)
    
        message.channel.send(UserEmbed)
    }

module.exports.help = {
    name: "serverinfo"
}