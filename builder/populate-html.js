const fs = require('fs');

// Read data from current.json
const data = JSON.parse(fs.readFileSync('./src/current.json', 'utf8'));

// Read the HTML template
let html = fs.readFileSync('./src/index.html', 'utf8');

// Replace placeholders with actual data
html = html.replace('__POSTER__', data.img);
html = html.replace('__TITLE__', data.title);
html = html.replace('__DIRECTOR__', data.director);
html = html.replace('__DESCRIPTION__', data.desc);
html = html.replace('__YEAR__', data.year);
html = html.replace('__TAGS__', data.tags);
html = html.replace('__LENGTH__', data.length);
html = html.replace('__DATE__', new Date().toDateString());

// Write the populated HTML to a new file
fs.writeFileSync('./src/index.html', html);