const express = require('express');
const data = require('./data.json');
const app = express();
const fs = require('fs');

//  Client can get a list of notes
app.get('/api/notes', (req, res) => {
  const array = [];
  for (const key in data.notes) {
    array.push(data.notes[key]);
  }
  res.json(array);
});
// Client can get a single ID by id
app.get('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  if (id < 0) {
    res.status(400).json({ error: 'id must be a positive integer ' });
  } else if (!data.notes[id]) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  } else {
    res.status(200).json(data.notes[id]);
  }
});

// Declaring our Middleware
const jsonMiddleware = express.json();
app.use(jsonMiddleware);

// User can see the post request come back.
app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    res.status(400).json({ error: 'content is a required field' });
  } else {
    const newNote = req.body;
    const id = data.nextId++;
    newNote.id = id;
    data.notes[id] = newNote;

    const dataJSON = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', dataJSON, 'utf8', err => {
      if (err) {
        throw res.status(500).json({ error: 'An unpexpected error occured.' });
      } else {
        res.status(201).json(newNote);
      }
    });
  }
});

// Ability to listen in our server.
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Sever is running and listening at port 3000!');
});
