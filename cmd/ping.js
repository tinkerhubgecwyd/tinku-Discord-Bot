const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with ws ping.'),
	async execute(interaction) {
		await interaction.reply(`Ping: ${interaction.client.ws.ping} ms`);
	},
};