const TelegramBot = require('node-telegram-bot-api');
const fs  = require('fs');

const token = '1737909385:AAFnJAaqWXfM1GwPs8MdL1oBnfMbVl6R6EE';
const bot = new TelegramBot(token, {polling: true});

loadNews();
setInterval(loadNews, 600000);


function loadNews() {
  require('./requests/searchLoL.js');
  setTimeout(function(){require('./requests/searchCSGO.js');}, 10000);
  setTimeout(function(){require('./requests/searchR6.js');}, 20000);
  setTimeout(function(){require('./requests/searchValorant.js');}, 30000);
  console.log("reloading...")
};

setTimeout(function() {
  bot.on('message', (msg) => {
    if (msg.text.toString().toLowerCase().indexOf("!lol") === 0) {
      dataLoL = fs.readFileSync('./requests/links/linksLoL.txt', 'utf8');
      bot.sendMessage(msg.chat.id, "As notícias de hoje são:")
      bot.sendMessage(msg.chat.id, dataLoL.slice(0, 26))
      bot.sendMessage(msg.chat.id, dataLoL.slice(26, 54))
      bot.sendMessage(msg.chat.id, dataLoL.slice(54, 80))
      bot.sendMessage(msg.chat.id, dataLoL.slice(80, 106))
      bot.sendMessage(msg.chat.id, dataLoL.slice(106, 132))
      console.log("New message has been sended!");
    }      
  });
  
  bot.on('message', (msg) => {
    if (msg.text.toString().toLowerCase().indexOf("!csgo") === 0) {
      let dataCSGO = fs.readFileSync('./requests/links/linksCSGO.txt', 'utf8');
      bot.sendMessage(msg.chat.id, "As notícias de hoje são:");
      bot.sendMessage(msg.chat.id, dataCSGO.slice(0, 26))
      bot.sendMessage(msg.chat.id, dataCSGO.slice(26, 54))
      bot.sendMessage(msg.chat.id, dataCSGO.slice(54, 80))
      bot.sendMessage(msg.chat.id, dataCSGO.slice(80, 106))
      bot.sendMessage(msg.chat.id, dataCSGO.slice(106, 132))
      console.log("New message has been sended!");
    }      
  });
  
  bot.on('message', (msg) => {
    if (msg.text.toString().toLowerCase().indexOf("!r6") === 0) {
      let dataR6 = fs.readFileSync('./requests/links/linksR6.txt', 'utf8');
      bot.sendMessage(msg.chat.id, "As notícias de hoje são:");
      bot.sendMessage(msg.chat.id, dataR6.slice(0, 26))
      bot.sendMessage(msg.chat.id, dataR6.slice(26, 54))
      bot.sendMessage(msg.chat.id, dataR6.slice(54, 80))
      bot.sendMessage(msg.chat.id, dataR6.slice(80, 106))
      bot.sendMessage(msg.chat.id, dataR6.slice(106, 132))
      console.log("New message has been sended!");
    }      
  });
  
  bot.on('message', (msg) => {
    if (msg.text.toString().toLowerCase().indexOf("!valorant") === 0) {
      let dataValorant = fs.readFileSync('./requests/links/linksValorant.txt', 'utf8');
      bot.sendMessage(msg.chat.id, "As notícias de hoje são:");
      bot.sendMessage(msg.chat.id, dataValorant.slice(0, 26))
      bot.sendMessage(msg.chat.id, dataValorant.slice(26, 54))
      bot.sendMessage(msg.chat.id, dataValorant.slice(54, 80))
      bot.sendMessage(msg.chat.id, dataValorant.slice(80, 106))
      bot.sendMessage(msg.chat.id, dataValorant.slice(106, 132))
      console.log("New message has been sended!");
    }      
  });
  console.log("go!");
}, 40000)

bot.on('message', (msg) => {  
  if (msg.text.toString().toLowerCase().indexOf("!commands") === 0) {
    bot.sendMessage(msg.chat.id, "My commands: !font !about !lol !r6 !csgo !valorant");
  }
});

bot.on('message', (msg) => {
  if (msg.text.toString().toLowerCase().indexOf("!about") === 0) {
    bot.sendMessage(msg.chat.id, "Hi! My name is E-News, I'm a bot developed by Alex Nicolas. Se my documentation on GitHub: ");
  }
});

bot.on('message', (msg) => {
  if (msg.text.toString().toLowerCase().indexOf("!font") === 0) {
    bot.sendMessage(msg.chat.id, "Font: https://news.google.com/");
  }
});