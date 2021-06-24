const add = (data, fs) => {
  const text = process.argv[3];
  const id = data.nextId;
  if (text !== undefined) {
    data.notes[id] = text;
  }
};

module.exports = add;
