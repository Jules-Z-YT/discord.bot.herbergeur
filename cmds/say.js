const Discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
      
 
    if (!message.member.hasPermission("MANAGE_MESSAGE")) return message.reply("STOP TU N'AS PAS LES PERMISSIONS REQUISES POUR UTILISER CETTE COMMANDE");
    let botmessage = args.join(" ");
    message.delete().catch();
    message.channel.send(botmessage)
 
}
 
module.exports.help = {
    name: "say"
}