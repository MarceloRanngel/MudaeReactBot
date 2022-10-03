const Discord = require('discord.js');

const client = new Discord.Client();

const mudaeId = '432610292342587392';

client.once('ready', () => {
    console.log('Amadeus is online!')
    client.user.setActivity("reações na Mudae", {
    type: ActivityType.Watching,
  });
})

client.on('message', message => {
    if (message.author.id == mudaeId) {
        message.react('❤️')
    }
})





client.login(process.env.DSJ_TOKEN);

