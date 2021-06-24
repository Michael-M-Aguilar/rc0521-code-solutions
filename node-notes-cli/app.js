const fs = require('fs');
const data = require('./data.json');
const read = require('./read');
const filler = process.argv[2];

if (filler === 'read') {
  read(data, fs);
}
