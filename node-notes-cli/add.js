const add = (data, fs) => {
  const text = process.argv[3];
  const nextId = data.nextId;
  if (text !== undefined) {
    data.notes[nextId] = text;
    data.nextId++;
    const jsonStringify = JSON.stringify(data, null, 2);

    fs.writeFile('data.json', jsonStringify, 'utf8', err => {
      if (err) throw err;
    });
  }
};

module.exports = add;
