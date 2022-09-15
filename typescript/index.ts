import SLHandler from "sl-commands";
import { join } from "path";

new SLHandler({
	commandsDir: join(__dirname, "commands"),
	featuresDir: join(__dirname, "features"),
	eventsDir: join(__dirname, "events"),

	botDevsIds: "OWNER ID",
	testServersIds: "TEST SERVER ID",

	language: "en-us",
	showWarns: true,
	testOnly: true,

	clientOptions: { intents: ["Guilds", "GuildMembers", "GuildPresences"] },
	botToken: "BOT AUTHORIZATION TOKEN",
});
