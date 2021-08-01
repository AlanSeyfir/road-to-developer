const {Client, MessageEmbed} = require('discord.js');
const client = new Client();

client.on('ready', () => {
    console.log(`Bot is ready as ${client.user.tag} ` );
    client.user.setStatus('online');
    console.log(client.user.presence.status);
    /* const testChannel = client.channels.find(channel => channel.name === 'test');
    console.log(testChannel);*/
});



client.on('message', async message =>{
    //Receive message
    console.log(message.content);
    if (message.content == 'dientes') {
        message.reply('TE CEPILLASTE LOS DIENTES');
    }

    let pattedone = message.mentions.users.first();
    if(!pattedone){
        message.reply('please mention the one who should be patted');
        pattedone = false;
    }
    message.reply(`you have successfully patted ${pattedone.id}`);

    if (message.content == 'hello') {
        message.channel.send(`Hello ${message.author}`);
    }

    if (message.content == '!delete') {
        message.channel.send(`Se borro el mensaje de ${message.author}`);
        message.delete();
    }

    if (message.content.includes('!test')) {
        message.channel.send('lo estas testeando cool xd, da igual si es s!testsgsgsg mientras este lo de includes todo chido');
    }

    if (message.content === '!fazt') {
        message.channel.send('https://www.youtube.com/watch?v=EUB777JJT5E');
        message.channel.send('https://www.freecodecamp.org/news/create-a-discord-bot-with-javascript-nodejs/');
    }

    if (message.content === '!pretty') {
        const embed = new MessageEmbed()
            .setTitle('A Pretty Message')
            //.setColor('#003345') //It can be this inputs between others
            .setAuthor('Alan', 'https://yt3.ggpht.com/1eYXW6q_iiNsaBjsfD9Xr-0hPgNyxE_EJ0X_xEKHQr4W65OCZdRHU7UlgMJ-ytQpOyTE-jg1wf0=s88-c-k-c0x00ffffff-no-rj-mo')
            .setColor('RANDOM');
            // .addField('Something One', 'Lorem Ipsum')
            // .addField('Something One', 'Lorem Ipsum')
            // .addField('Something One', 'Lorem Ipsum')
            // .addField('Something One', 'Lorem Ipsum');
        message.channel.send(embed);
    }

    if (message.content === '!clear') {
        const fetched = await message.channel.fetchMessages({limit: 100});
        message.channel.bulkDelete(fetched);
        console.log('Mensajes eliminados');
    }
});

client.login('YOU TOUGHT LMAO');

