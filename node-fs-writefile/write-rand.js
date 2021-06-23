const fs = require('fs');
const randomNumber = Math.random().toString();

fs.writeFile('random.txt', randomNumber, err => {
  if (err) {
    console.error(err);
  }
});
