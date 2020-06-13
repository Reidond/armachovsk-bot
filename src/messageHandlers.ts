import { REIDOND, RIEPER } from "./constants";
import { Message } from "discord.js";
import { rieperMessageHandler } from "./messages/rieper";
import { reidondMessageHandler } from "./messages/reidond";

type MessageHandlers = Map<String, Function>;
interface IMessageHandlersContext {
  msg: Message;
}

const messageHandlersDbg: MessageHandlers = new Map();
messageHandlersDbg.set(REIDOND, reidondMessageHandler);

const messageHandlersProd: MessageHandlers = new Map();
messageHandlersProd.set(RIEPER, rieperMessageHandler);

function executeMessageHandlers(
  messageHandlers: MessageHandlers,
  context: IMessageHandlersContext
) {
  messageHandlers.get(context.msg.author.id).call(context);
}

export {
  messageHandlersDbg,
  messageHandlersProd,
  executeMessageHandlers,
  IMessageHandlersContext,
};
