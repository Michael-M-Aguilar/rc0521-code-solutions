const fs = require('fs');
const add = require('./add');
const data = require('./data.json');
const read = require('./read');
const update = require('./update');
const deleted = require('./delete');
const filler = process.argv[2];

if (filler === 'read') {
  read(data, fs);
} else if (filler === 'create') {
  add(data, fs);
} else if (filler === 'update') {
  update(data, fs);
} else if (filler === 'delete') {
  deleted(data, fs);
}
