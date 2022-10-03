const {Client, GatewayIntentBits, ActivityType, Collection, Message} = require('discord.js');

const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.MessageContent
    ]
 });

const mudaeId = '432610292342587392';

client.once('ready', () => {
    console.log('Amadeus is online!')
    client.user.setActivity('❤️ na Mudae', { type: ActivityType.Playing });
})

client.on('messageCreate', (message) =>{
    if(message.author.id == mudaeId){
        message.react('❤️')
    }
})



client.login(process.env.DSJ_TOKEN);

