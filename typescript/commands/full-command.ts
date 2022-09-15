import { SLChatInputCommand } from "sl-commands";

new SLChatInputCommand()
	.setName("full-command")
	.setDescription("This is an example")
	.setNameLocalization("pt-BR", "comando-completo")
	.setDescriptionLocalization("pt-BR", "Isso é um exemplo")
	.addStringOption((option) =>
		option
			.setName("example-option")
			.setDescription("This is an example")
			.setRequired(true)
			.setMaxLength(100)
			.setMinLength(5)
	)
	.setRequiredPermissions("ManageMessages", "ManageChannels")
	.onExecute(
		({
			interaction,
			options,
			channel,
			client,
			locale,
			user,
			guild,
			member,
			handler,
		}) => {
			const stringOptionValue = options.getString("example-option");

			channel; // The current channel
			guild; // The current guild
			user; // The User who used the command
			member; // The GuildMemmber who used the command
			locale; // The locale from the user who used the command

			interaction.reply({
				content: `I currently have ${handler.commandLoader.commands.size} commands.`,
			});
		}
	);
