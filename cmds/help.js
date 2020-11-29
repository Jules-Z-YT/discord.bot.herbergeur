const  { MessageEmbed } = require('discord.js');
const { Menu } = require('discord.js-menu');

/*
Page 1 - Aceuil
Page 2 - Commande
Page 3 - Information
*/
module.exports.run = async (bot, message, args) => {
    console.log(message)
let helpMenu = new Menu(message.channel, message.author.id, [
    {
        name: 'main',
        content: new MessageEmbed()
        .setTitle('Acceuil')
        .addField("Bienvenue sur la page de la commande help si vous êtes ici c\'est  que vous voulez connaitre la liste des commande que je possède donc cliquer sur la réaction si dessous de la flèche vers la droite.")
        .setFooter('Page 1/3')
        ,
        reactions:{
        '▶': "next"
        }
        },
    {
        name: "otherPage",
        content: new MessageEmbed()
        .setTitle('Commande')
        .addField("Voici mes commandes disponible :")
        .addField("clear <entrer un nombre de message a supprimer> : Sert à supprimer un nombre de message précis.","!clear")
        .addField("say : Permet au bot d\'envoyer le message que vous souhaitez à votre place.", "!say")
        .addField("poll <Votre question> / votre réponse / votre réponse : Permet de créer un sondage avec le bot", "!poll")
        .addField("serverinfo : Permet de voir les informations du serveur", "!serverinfo")
        .addField("userinfo : Permet de voir vos information votre nom, votre tag, votre id ect...", "!userinfo")
        .setFooter('Page 2/3')
        ,
        reactions:{  
        '◀': 'previous', 
        '▶': "next"
    }
    },
    {
        name: "otherPage",
        content: new MessageEmbed()
        .setTitle('Information')
        .addField("Voici maintenant la dernière page celle des informations sur le bot, je suis un bot développé par :", "UZ Suuudry#4770")
        .addField("J\'ai été créer le : 21/11/20 et je suis un bot allumé 24/7","Prefix : !")
        .setFooter('Page 3/3')
        ,
        reactions:{  
        '◀': 'previous'
    }
    },
    ], 300000)
        helpMenu.start()
}

module.exports.help = {
    name : 'help'
    }