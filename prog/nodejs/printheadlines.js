// Datei: prog/nodejs/printheadlines.js

const Parser = require('rss-parser')
  parser = new Parser()
  moment = require('moment');

parser.parseURL('https://www.heise.de/newsticker/heise-atom.xml')
  .then(feed => {
    feed.items.forEach(entry => {
      console.log("* [%s]: %s",
        moment(entry.pubDate).format("Y-MM-DD HH:mm:ss"),
        entry.title);
    })
  });
