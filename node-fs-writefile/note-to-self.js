const fs = require('fs');
const filledInMessage = process.argv[2];
fs.writeFile('note.txt', filledInMessage, 'utf8', err => {
  if (err) {
    console.error(err);
  }
});
