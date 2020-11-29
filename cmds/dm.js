const Discord = module.require('discord.js');

module.exports.run = async (bot, message) => {
    
message.delete();

let desti = message.mentions.users.first()

const guild = message.guild;

if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande.')
if (!desti) return message.channel.send('Veuillez mentionner la personne a dm')
let messageArray = message.content.split(" ");
let args = messageArray.slice(1);
let texte = args.join(" ").slice(22);
if(!texte) return message.reply("Veuillez indiquer un texte à envoyer")

const embed = new Discord.MessageEmbed()
  .setColor("#ffffff")
  .setTitle("Vous avez reçu un mail")
  .setDescription(`**Le serveur ${guild.name} vous a envoyé un message**`)
  .addField('\u200B', `Pour la raison : **${texte}**`)
  .setFooter(message.author.username,message.author.avatarURL({dynamic: true}))
  
desti.send(embed)

}
  module.exports.help = {
    name: "dm"
}