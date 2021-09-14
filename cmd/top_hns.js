
const { SlashCommandBuilder } = require('@discordjs/builders');

const top_hn = require('../get_top_hn');

module.exports = {
	data: 	new SlashCommandBuilder()
            .setName('get_news')
            .setDescription('get upto ten new hacker news updates'),

	async execute(interaction) {

        await interaction.deferReply();

        top_hn().then(async top_hns_response => {
            let news = '';

            top_hns_response.forEach(res => {
                let news_atom = `\n[${res.title}](${res.url})\n`;
                news += news_atom;
            });
    
            await interaction.editReply({ content: news });
        }).catch(async e => {
            await interaction.editReply({ 
                content: '' + e, 
                ephemeral: true 
            });
        });

    },

};