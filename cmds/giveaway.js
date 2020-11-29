const Discord = require('discord.js')
const ms = require('ms')

module.exports = {
  run : async(bot, message, args) => {

    let time = args[0]
    if(!time) return message.channel.send('Merci de donner un temps!');

    if(
        !args[0].endsWith("d") &&
        !args[0].endsWith("h") &&
        !args[0].endsWith("m") &&
        !args[0].endsWith("s") 
    )
        return message.channel.send("Vous devez utiliser d (jours), h (heures), m (minutes) ou s (secondes) ")

        let gchannel = message.mentions.channels.first();
        if(!gchannel) return message.channel.send("Je ne trouve pas ce canal dans le serveur!")

        let prize = args.slice(2).join("    ")
        if (!prize) return message.channel.send("Merci de présicez la récompense à gagné")

        message.delete()
        gchannel.send(":tada: **GIVEAWAY** :tada:")
        let gembed = new Discord.MessageEmbed()
            .setTitle('Nouveau giveaway !')
            .setColor('#f9f9f6')
            .setDescription(`Appuie sur la réaction :tada: pour partiper au giveaway!\nGiveaway organisé par : **${message.author}**\nTemps : **${time}**\nRécompense : **${prize}**`)
            .setTimestamp(Date.now + (args[0]))
            .setFooter('UZ Clan®')
            let m = await gchannel.send(gembed)
            m.react("🎉")
            setTimeout(() => {
                if(m.reactions.cache.get("🎉").count <= 1) {
                    return message.channel.send("Je n'ai pas pue déterminer de gagnant!")
                }

                let winner = m.reactions.cache.get("🎉").users.cache.filter((u) => !u.bot).random();
                gchannel.send(`Bravo à toi ${winner} ! Tu à gagné un **${prize}** !`
                );
            },ms(args[0]));
}
  }

module.exports.help = {
  name: "giveaway"
  }