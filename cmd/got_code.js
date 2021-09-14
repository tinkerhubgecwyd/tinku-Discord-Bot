
const { SlashCommandBuilder } = require('@discordjs/builders');
const { CODES } = require('../CODES');

module.exports = {
	data: 	new SlashCommandBuilder()
            .setName('got_code').setDescription('to authenticate the entered mail id (after getting code in mail inbox)')
            .addNumberOption(option =>
                option.setName('code')
                    .setDescription("code after the '/got_code' from mail recieved")
                    .setRequired(true)),

    async execute(interaction) {

        let user_id = interaction.user.id;
        let code = interaction.options._hoistedOptions[0].value;

        if (CODES[user_id] == code){
            let GECWIAN_ROLE = interaction.guild.roles.cache.find(r => r.name === 'GECWIAN');
            interaction.member.roles.add(GECWIAN_ROLE);
            await interaction.reply({ 
                content:
`🎊🎉🎉🎊
RESPECT + +
WELCOME TO
GECWIAN CLUB`, 
                ephemeral: true 
            });

        } else {

            await interaction.reply({ 
                content: 
`WOOPS..🤖
THAT'S NOT WHAT I SENT.
CONSIDER RETYPING.`, 
                ephemeral: true 
            });

        };

    },
};
