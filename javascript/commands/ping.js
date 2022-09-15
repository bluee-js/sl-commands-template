const { SLChatInputCommand } = require("sl-commands");

new SLChatInputCommand()
	.setName("ping")
	.setDescription("Shows my ping")
	.onExecute(({ interaction, client }) => {

		interaction.reply({
			content: `Hey! My ping is currently ${client.ws.ping}ms.`,
		});
    
	});
