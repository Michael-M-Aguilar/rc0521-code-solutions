const fs = require('fs');
const filler = process.argv[2];

if (filler === 'cunningham.txt') {
  fs.readFile('cunningham.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
} else if (filler === 'dijkstra.txt') {
  fs.readFile('dijkstra.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
} else if (filler === 'hipster-ipsum.txt') {
  fs.readFile('hipster-ipsum.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
} else if (filler === 'hopper.txt') {
  fs.readFile('hopper.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });

}
