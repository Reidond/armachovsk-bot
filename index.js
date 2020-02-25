const http = require("http");
const express = require("express");
const Discord = require("discord.js");

require("dotenv").config();

const app = express();
const TOKEN = process.env.TOKEN;
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", async msg => {
  if (msg.content.includes("мусор") && msg.author.id === "298062589261512704") {
    try {
      await msg.delete();
      msg.reply(`( ͡° ͜ʖ ͡°)╭∩╮`);
      console.info(`Message by ${msg.author.tag} was deleted`);
    } catch (e) {
      console.error(e.message);
    }
  }
});

client.login(TOKEN);

app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
