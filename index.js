const Discord = require("discord.js")
const bot = new Discord.Client();
const fs = require("fs");

bot.commands = new Discord.Collection();

const config = require("./config.json");

bot.login(config.token)

fs.readdir("./cmds/", (err, files) => {
    if(err) console.log(err);
 
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log("Aucune commande trouver.")
        return;
    }
 
    jsfile.forEach((f, i) => {
        let props = require(`./cmds/${f}`);
        console.log(`${f} Prêt !`);
        bot.commands.set(props.help.name, props);
    })
})

bot.on("ready", async () => {

    console.log(`(${bot.user.username}): En ligne`)

    let statueses = [
        "bot encore en dev",
        "dev by Suuudry",
    ]
    
    setInterval(function() {
        let status = statueses[Math.floor(Math.random() * statueses.length)];
        bot.user.setActivity(status, {type: "WATCHING"})
    })
})

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;

    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    let commandFile = bot.commands.get(command.slice(prefix.length));
    if(commandFile) commandFile.run(bot, message, args)
});

clientInformation.login(process.env.TOKEN);