
const { Collection } = require('discord.js');

const fs = require('fs');
const commandFiles = fs.readdirSync('./cmd').filter(file => file.endsWith('.js'));

module.exports = (client) => {
    
    client.commands = new Collection();

    for (const file of commandFiles) {
        const command = require(`./cmd/${file}`);
        client.commands.set(command.data.name, command);
    };

    client.on('interactionCreate', async interaction => {
        if (!interaction.isCommand()) return;
        
        console.log('INCOMING COMMAND: ' + interaction.commandName);

        const command = client.commands.get(interaction.commandName);

        if (!command) return;

        try {
            await command.execute(interaction);
        } catch (error) {
            console.error(error);
            return interaction.reply({ 
                content: 'There was an error while executing this command!',
                ephemeral: true 
            });
        };
    });
};