const eris = require('eris');
const PREFIX = '!sb ';
const {bot_token} = require('./config.json');
const bot = new eris.Client(bot_token);
const commandHandlerForCommandName = {};

commandHandlerForCommandName['play'] = (args) => {
    const song = args[0];
    const channel = args[1];
    return msg.channel.createMessage('Now Playing: ${song} in $${channel}.')
};

bot.on('ready', () => {
    console.log('Connected and ready.');
});

bot.on('messageCreate', async (msg)=> {
    const content = msg.content;

    if (!content.startsWith(PREFIX)){
        return;
    }

    const parts = 
    const commandName = ;


    const commandHandler = commandHandlerForCommandName[commandName];

    if (!commandHandler) {
        return;
    }

});

bot.on('error', err=> {
    console.warn(err)
});
bot.connect();