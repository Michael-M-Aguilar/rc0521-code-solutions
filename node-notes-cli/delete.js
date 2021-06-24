const deleted = (data, fs) => {
  const index = process.argv[3];

  delete data.notes[index];

  const jsonStringify = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', jsonStringify, 'utf8', err => {
    if (err) throw err;
  });
};
module.exports = deleted;
