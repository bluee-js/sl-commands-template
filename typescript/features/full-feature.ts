import { SLFeature, SLUtil } from "sl-commands";

new SLFeature()
	.setInit((ctx) => {
		ctx.client; // This is your DiscordJS client

		SLUtil.Logger.warn("Init function executed!");
	})
	.addTimed((ctx) => {
		SLUtil.Logger.warn("Timed function executed with 10 seconds interval!");
	}, 10000); // milliseconds
