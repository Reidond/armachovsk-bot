import Discord from "discord.js";
import dotenv from "dotenv";

dotenv.config();
const { TOKEN } = process.env;
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

type MessageHandlers = Map<String, Function>;
const messageHandlers: MessageHandlers = new Map();
messageHandlers.set("257519105177812993", function (
  this: IMessageHandlersContext
) {
  console.log(this.msg);
});

interface IMessageHandlersContext {
  msg: Discord.Message;
}
function executeMessageHandlers(context: IMessageHandlersContext) {
  for (const mh of messageHandlers) {
    mh[1].call(context);
  }
}

client.on("message", async (msg) => {
  const messageHandlersContext: IMessageHandlersContext = {
    msg,
  };
});

client.login(TOKEN);
