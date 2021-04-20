const fs  = require('fs');
const request = require('request');
const cheerio = require('cheerio');
const shortUrl = require('node-url-shortener');

const arrLinks = [];

request("https://news.google.com/search?q=Valorant&hl=pt-BR&gl=BR&ceid=BR%3Apt-419", function(err, res, body) {
  if (!err && res.statusCode == 200) {
    let $ = cheerio.load(body);

    $('h3 a').slice(0, 5).each(function() {
      let link = $(this).attr("href");
      arrLinks.push(link);
    })
  }

  const options = [];

  arrLinks.forEach(function(item) {
      options.push('https://news.google.com/' + item);
  });

  options.forEach(finalLinks);

  const load = [];
  function finalLinks(item) {

    request.get(item, function (err, res, body) {
      if (!err && res.statusCode == 200) {
        let $ = cheerio.load(body);

        $('.m2L3rb a').each(function() {          
          load.push($(this).html());
        })
      }

//      console.log(loadLinks);
      const loadLinks = [];
      load.forEach(function(item) {
        if (!loadLinks.includes(item)) {
          loadLinks.push(item + "\n");
        }
      });   

      let linkUrl = ["\n"]
      loadLinks.forEach(function(item){
          shortUrl.short(item, function(err, url){
          linkUrl.push(url + "\n");
          fs.writeFileSync("./requests/links/linksValorant.txt", linkUrl, (err) => {
              if (err)
                console.log(err);
          });
        });
      })
    });
  };
});