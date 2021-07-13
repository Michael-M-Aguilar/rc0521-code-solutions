const express = require('express');
const app = express();
const path = require('path');

const test = path.join(__dirname, 'public');

const middleware = express.static(test);
app.use(middleware);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server listening on 3000');
});
