import { REIDOND, RIEPER } from "./constants";
import { Message } from "discord.js";
import { rieperMessageHandler } from "./messages/rieper";
import { reidondMessageHandler } from "./messages/reidond";

type MessageHandlers = Map<String, Function>;
interface IMessageHandlersContext {
  msg: Message;
}

const messageHandlers: MessageHandlers = new Map();
messageHandlers.set(REIDOND, reidondMessageHandler);
messageHandlers.set(RIEPER, rieperMessageHandler);

function executeMessageHandlers(context: IMessageHandlersContext) {
  messageHandlers.get(context.msg.author.id).call(context);
}

export { messageHandlers, executeMessageHandlers, IMessageHandlersContext };
