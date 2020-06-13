import { IMessageHandlersContext } from "../messageHandlers";

function rieperMessageHandler(this: IMessageHandlersContext) {
  const { msg } = this;

  const thankThatAlive = async () => {
    await msg.reply("Спасибо, что живой");
    await msg.react("♥");
  };

  Promise.all([thankThatAlive()]);
}

export { rieperMessageHandler };
