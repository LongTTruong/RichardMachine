const eris = require('eris');
const prefix = '!sb';
const {bot_token} = require('./config.json');
const bot = new eris.Client(bot_token);

bot.on('ready', () => {
    console.log('Connected and ready.');
});

bot.on('messageCreate', async (msg)=> {
    const botWasMention = msg.mentions.find(
        mentionedUser => mentionedUser.id === bot.user.id,
    );

    if (botWasMention) {
        try {
            await msg.channel.createMessage("I'm over here stroking my dick, got lotion on my dick, I'm strokin my shit.")
        } catch (err){
            console.warn('Failed to respond.');
            console.warn(err)
        }
    }
});

bot.on('error', err=> {
    console.warn(err)
});

bot.connect();