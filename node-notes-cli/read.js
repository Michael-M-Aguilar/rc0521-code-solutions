const read = data => {
  let text = '';
  for (const [key, value] of Object.entries(data.notes)) {
    text += `${key}: ${value}` + '\n';
  }
  text = text.slice(0, text.length - 1);
  console.log(text);
};

module.exports = read;
