const fs = require('fs');
const j = require('./questions-raw.json');
const r = j.filter((i) => i.corrects.length > 0);

fs.writeFileSync('./questions.json', JSON.stringify(r, null, 2));

console.log(r.length);
