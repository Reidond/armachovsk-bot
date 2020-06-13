import { IMessageHandlersContext } from "../messageHandlers";

function reidondMessageHandler(this: IMessageHandlersContext) {
  const { msg } = this;

  const debugMsg = async () => {
    if (msg.content === "test") {
      await msg.react("🐛");
    }
  };

  Promise.all([debugMsg()]);
}

export { reidondMessageHandler };
