////////////////////////////////////////////////

const token = process.env.token;
const clientId = process.env.clientId;
const guildId = process.env.guildId;

////////////////////////////////////////////////

const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

////////////////////////////////////////////////

const commands = [];
const commandFiles = fs.readdirSync('./cmd').filter(file => file.endsWith('.js'));

const rest = new REST({ version: '9' }).setToken(token);

////////////////////////////////////////////////

module.exports = () => {
    for (const file of commandFiles) {
        const command = require(`./cmd/${file}`);
        commands.push(command.data.toJSON());
    };
    (async () => {
        try {
            await rest.put(
                Routes.applicationGuildCommands(clientId, guildId),
                { body: commands },
            );
    
            console.log('Successfully registered application commands.');
        } catch (error) {
            console.error(error);
        }
    })();
};

////////////////////////////////////////////////