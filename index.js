const TelegramBot = require('node-telegram-bot-api');
const request = require('request');
const cheerio  = require('cheerio');

const token = 'TOKEN'; // need a TOkEN. Please find "@botfarthe" in Telegram App and to get a key
const bot = new TelegramBot(token, {polling: true});

// commands
bot.on('message', (msg) => {
    
  var commands = "!commands";
  if (msg.text.toString().toLowerCase().indexOf(commands) === 0) {
    bot.sendMessage(msg.chat.id, "My commands: !font !about !news !lol !r6 !csgo !valorant");
  }

});

// about
bot.on('message', (msg) => {
    
  var about = "!about";
  if (msg.text.toString().toLowerCase().indexOf(about) === 0) {
    bot.sendMessage(msg.chat.id, "Hi! My name is E-News, I'm a bot developed for Alex Nicolas. Se my documentation on GitHub: ");
  }

});

// font: Mais Esports
bot.on('message', (msg) => {
    
  var font = "!font";
  if (msg.text.toString().toLowerCase().indexOf(font) === 0) {
    bot.sendMessage(msg.chat.id, "Font: https://maisesports.com.br");
  }

});

// all news
var arr = [];

request("https://maisesports.com.br", function(err, res, body){
  if(!err && res.statusCode == 200) {
    let $ =  cheerio.load(body);

    $('h4').each(function(){
    arr.push($(this).html());
    })
  }

  if (arr.length > 20) {
    arr.length = 20;
  }

  all = arr.reduce((r, a) => r.concat(a, "\n"), ["\n"]);

})

bot.on('message', (msg) => {
    
  var news = "!news";
  if (msg.text.toString().toLowerCase().indexOf(news) === 0) {
    bot.sendMessage(msg.chat.id, "As notícias de hoje são: \n" + all);
  }
        
});

// all news about Valorant
var arrValorant = [];

request("https://maisesports.com.br/valorant/", function(err, res, body) {
  if (!err && res.statusCode == 200) {
    let $ = cheerio.load(body);

    $('h4').each(function() {
      arrValorant.push($(this).html());
    })
  }

  if (arrValorant.length > 20) {
    arrValorant.length = 20;
  }

  allValorant = arrValorant.reduce((r, a) => r.concat(a, "\n"), ["\n"]);

})

bot.on('message', (msg) => {
    
  var valorant = "!valorant";
  if (msg.text.toString().toLowerCase().indexOf(valorant) === 0) {
    bot.sendMessage(msg.chat.id, "As notícias de hoje são: \n" + allValorant);
  }
        
});

// all news about CSGO
var arrCSGO = [];

request("https://maisesports.com.br/cs-go/", function(err, res, body) {
  if (!err && res.statusCode == 200) {
    let $ = cheerio.load(body);

    $('h4').each(function() {
      arrCSGO.push($(this).html());
    })
  }

  if (arrCSGO.length > 20) {
    arrCSGO.length = 20;
  }

  allCSGO = arrCSGO.reduce((r, a) => r.concat(a, "\n"), ["\n"]);

})

bot.on('message', (msg) => {
    
  var csgo = "!csgo";
  if (msg.text.toString().toLowerCase().indexOf(csgo) === 0) {
    bot.sendMessage(msg.chat.id, "As notícias de hoje são: \n" + allCSGO);
  }
        
});

// all news about Rainbow Six
var arrR6 = [];

request("https://maisesports.com.br/rainbow-six/", function(err, res, body) {
  if (!err && res.statusCode == 200) {
    let $ = cheerio.load(body);

    $('h4').each(function() {
      arrR6.push($(this).html());
    })
  }

  if (arrCSGO.length > 20) {
    arrR6.length = 20;
  }

  allR6 = arrR6.reduce((r, a) => r.concat(a, "\n"), ["\n"]);

})

bot.on('message', (msg) => {
    
  var r6 = "!r6";
  if (msg.text.toString().toLowerCase().indexOf(r6) === 0) {
    bot.sendMessage(msg.chat.id, "As notícias de hoje são: \n" + allR6);
  }
        
});

// all news about League of Legends
var arrLoL = [];

request("https://maisesports.com.br/league-of-legends/", function(err, res, body) {
  if (!err && res.statusCode == 200) {
    let $ = cheerio.load(body);

    $('h4').each(function() {
      arrLoL.push($(this).html());
    })
  }

  if (arrLoL.length > 20) {
    arrLoL.length = 20;
  }

  allLoL = arrLoL.reduce((r, a) => r.concat(a, "\n"), ["\n"]);

})

bot.on('message', (msg) => {
    
  var lol = "!lol";
  if (msg.text.toString().toLowerCase().indexOf(lol) === 0) {
    bot.sendMessage(msg.chat.id, "As notícias de hoje são: \n" + allLoL);
  }
        
});