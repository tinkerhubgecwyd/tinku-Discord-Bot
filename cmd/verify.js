
const { SlashCommandBuilder } = require('@discordjs/builders');
const mail = require('../mail');
const { CODES } = require('../CODES');

module.exports = {
	data: 	new SlashCommandBuilder()
            .setName('verify').setDescription('initialize verification as a gecwian through college mail id')
            .addStringOption(option =>
                option.setName('e-mail')
                    .setDescription('your mail-id on the gecwyd.ac.in domain')
                    .setRequired(true)),

	async execute(interaction) {

        let HAVE_GECWIAN_ROLE = interaction.member.roles.cache.some(r => r.name === 'GECWIAN');

        if (HAVE_GECWIAN_ROLE){

            await interaction.reply({ 
                content: 'ALREADY VERIFIED 🕊', 
                ephemeral: true 
            });

        } else {

            let verifier_id = interaction.user.id;
			let mailId = interaction.options._hoistedOptions[0].value;

			if (mailId.endsWith('@gecwyd.ac.in') && (mailId.length > 15)){

				await interaction.deferReply({ ephemeral: true });

				let code = Math.floor((Math.random() * 9990) + 1010).toString();

				CODES[verifier_id] = code;

				console.log(code)

				mail(mailId, code).then(async r => {
					await interaction.editReply({ 
						content: r, 
						ephemeral: true 
					});
				}).catch(async e => {
					await interaction.editReply({ 
						content: e, 
						ephemeral: true 
					});
				});

			} else {

				await interaction.reply({ 
					content: 
`🐱‍🚀 Mail ID should end with "@gecwyd.ac.in"
${mailId} doesn't looks like so...`, 
					ephemeral: true 
				});

			};
        };
	},
};