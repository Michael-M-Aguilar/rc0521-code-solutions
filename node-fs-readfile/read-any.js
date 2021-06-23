const fs = require('fs');
const filler = process.argv[2];

fs.readFile(filler, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
