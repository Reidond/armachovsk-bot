import Discord from "discord.js";
import dotenv from "dotenv";
import { BOT_PLAYGROUND } from "./constants";
import {
  messageHandlersDbg,
  messageHandlersProd,
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
    executeMessageHandlers(messageHandlersDbg, messageHandlersContext);
  } else {
    executeMessageHandlers(messageHandlersProd, messageHandlersContext);
  }
});

client.login(TOKEN);
