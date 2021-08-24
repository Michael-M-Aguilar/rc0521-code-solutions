const pg = require('pg');
const express = require('express');
const app = express();
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

// Declaring our Middleware
const jsonMiddleware = express.json();
app.use(jsonMiddleware);
// Get our tables.
app.get('/api/grades', (req, res) => {
  const sql = ` SELECT *
  FROM "grades" `;

  db.query(sql)
    .then(result => {
      const grade = result.rows;
      if (!grade.length) {
        res.status(404).json({
          error: 'Cannot find grade any rows'
        });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.log(err);
      res.status(500).json({ error: 'An unexpected error occured.' });
    });
});

app.get('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }
  const sql = `
    select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
      from "grades"
     where "gradeId" = $1
     `;
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

// Ability to post a new row
app.post('/api/grades', (req, res) => {
  if (!req.body.name || !req.body.course || !req.body.score) {
    res.status(400).json({ error: 'Some fields are missing' });
  } else if (req.body.score < 0 || req.body.score > 100) {
    res.status(400).json({ error: 'Invalid score. Must be between 0 and 100.' });
  }
  const params = [req.body.name, req.body.course, req.body.score];
  const sql = `INSERT INTO "grades" ("name", "course", "score")
      VALUES ($1, $2, $3);`;

  db.query(sql, params)
    .then(result => {
      res.status(201).json(req.body);
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.log(err);
      res.status(500).json({ error: 'An unexpected error occured.' });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  if (!req.body.name || !req.body.course || !req.body.score) {
    res.status(400).json({ error: 'Some fields are missing' });
  }
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({ error: '"gradeId" must be a positive integer"' });
  }
  const sql = ` UPDATE "grades"
                   SET "name" = $2,
                       "course" = $3,
                       "score" = $4
                 WHERE "gradeId" = $1;`;
  const params = [gradeId, req.body.name, req.body.course, req.body.score];
  db.query(sql, params)
    .then(result => {
      res.status(200).json(req.body);
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.log(err);
      res.status(500).json({ error: 'An unexpected error occured.' });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  const sql = `DELETE FROM "grades"
                     WHERE "gradeId" = $1;`;
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      res.sendStatus(204).json(req.body);
    })
    .catch(err => {
    // eslint-disable-next-line no-console
      console.log(err);
      res.status(500).json({ error: 'An unexpected error occured.' });
    });
});
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is running and listening at port 3000!');
});
