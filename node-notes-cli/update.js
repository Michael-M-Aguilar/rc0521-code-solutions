const update = (data, fs) => {
  const index = process.argv[3];
  const updatedNote = process.argv[4];
  data.notes[index] = updatedNote;

  const jsonStringify = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', jsonStringify, 'utf8', err => {
    if (err) throw err;
  });
};

module.exports = update;
