const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '&';

const mudaeId = '432610292342587392';

client.once('ready', () => {
    console.log('Amadeus is online!')
})

client.on('message', message => {
    if (message.author.id == mudaeId) {
        message.react('❤️')
        console.log('Mensagem Reagida')
    }
})



client.login(process.env.DSJ_TOKEN);

