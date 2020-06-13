import Discord from "discord.js";
import dotenv from "dotenv";
import { BOT_PLAYGROUND } from "./constants";
import {
  executeMessageHandlers,
  IMessageHandlersContext,
} from "./messageHandlers";

dotenv.config();
const { TOKEN, ROLLUP_WATCH, NODE_ENV } = process.env;
const dev = ROLLUP_WATCH === "true" || NODE_ENV === "development";
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", async (msg) => {
  const messageHandlersContext: IMessageHandlersContext = {
    msg,
  };
  if (dev && msg.channel.id === BOT_PLAYGROUND) {
    executeMessageHandlers(messageHandlersContext);
  }
});

client.login(TOKEN);
