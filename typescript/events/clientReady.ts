import { SLEvent, SLUtil } from "sl-commands";

new SLEvent('ready', (ctx) => {
  ctx.client // This is your DiscordJS client

  SLUtil.Logger.success('Bot successfuly logged!')
})