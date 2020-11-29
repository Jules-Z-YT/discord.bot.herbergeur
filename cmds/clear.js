const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.reply("Vous ne Pouvez pas utiliser cette commande ! Veuillez contacter le support pour plus d'aider");
    if(!args[0])
    return message.reply("Commande : !clear <entrer le nombre à supprimer>");

    message.channel.bulkDelete(args[0]).then(() => {

        message.channel.send(`***${args[0]} message(s) à/ont bien été(s) supprimé(s) !***`).then(sent => sent.delete({timeout: 5e3}))
    })
}

module.exports.help = {
    name: "clear"
}