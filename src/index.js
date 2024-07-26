require('dotenv/config');
const path = require('path')
const mongoose = require('mongoose')
const { Client, Events, GatewayIntentBits, EmbedBuilder } = require('discord.js');


const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});


client.on('ready', (c) => {
    console.log(`✅ ${c.user.tag} is online.`);
});


client.login(process.env.TOKEN);

client.on('messageCreate', (message) => {
    if (message.author.bot) {
        return;
    }
    if (message.content === '!specs') {
        message.reply(`CPU: AMD Ryzen 5600X
GPU: NVIDIA RTX 3060 Ti
MOBO: AsRock B450 SteelLegend
CASE: Lian Li Lancool 216`)
	}
    if (message.content === '!info') {
        message.reply('!specs, !spotify, !twitch, !sens !youtube !peripherals')
    }
    if (message.content === '!twitch') {
        message.reply('https://www.twitch.tv/examples947')
    }

    if (message.content === '!spotify') {
        message.reply('https://open.spotify.com/playlist/3evNvfCpovgolRVUwHx14D?si=b86e2861b6fc4f6c')
    }

    if (message.content === '!sens') {
        message.reply('800 dpi 35% or 1600 dpi 15%, i use both of it')
    }

    if (message.content === '!youtube') {
        message.reply('https://www.youtube.com/@examplesdbd')
    }

    if (message.content === '!peripherals') {
        message.reply(`Mouse: EGG OP1 8K, Logitech G PRO X SUPERLIGHT
Keyboard: FLesports FL750
Headphones: HyperX Cloud Alpha S
Mousepad: Artisan Zero Soft
Monitor: Benq Zowie XL2411P`)
    }
});

client.login(process.env.TOKEN);