import { SLSubCommand } from "sl-commands";

new SLSubCommand()
	.setName("example-subcommand")
	.setReference("example-main-command")
	.onExecute(({ interaction }) => {
		interaction.reply({ content: "SubCommand replied!" });
	});
