const { SLChatInputCommand } = require("sl-commands");

new SLChatInputCommand()
	.setName("example-main-command")
	.setDescription("This is an example main command")
	.addSubcommand((subCommand) =>
		subCommand
			.setName("example-subcommand")
			.setDescription("This is an example subcommand")
	);