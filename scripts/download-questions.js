const fs = require('fs');
const Parser = require('rss-parser');
const parser = new Parser();

(async () => {
  const feed = await parser.parseURL('https://feeds.rebuild.fm/rebuildfm');
  const json = feed.items
    .filter(({ title }) => !title.startsWith('Aftershow'))
    .map(({ title, link, contentSnippet }) => {
      const tt = title.split(':').map((s) => s.trim());
      const episode = Number(tt[0]);
      return {
        episode,
        title: tt[1],
        link,
        corrects: [],
        subtitle: contentSnippet.substring(0, contentSnippet.indexOf('\n'))
      };
    });
  fs.writeFileSync('questions-raw.json', JSON.stringify(json, null, 2));
})();
