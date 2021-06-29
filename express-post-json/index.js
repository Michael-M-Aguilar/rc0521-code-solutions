const express = require('express');
const app = express();

let nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const array = [];
  for (const key in grades) {
    array.push(grades[key]);
  }
  res.json(array);
});

const jsonMiddleware = express.json();
app.use(jsonMiddleware);

app.post('/api/grades', (req, res) => {
  grades[nextId] = req.body;
  grades[nextId].id = nextId;
  const curId = nextId;
  nextId++;
  res.status(201).json(grades[curId]);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Sever is running and listening at port 3000!');
});
