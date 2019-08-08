const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('./database')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '..', 'public')));

app.get('/api/songs', (req, res) => {
  db.query('SELECT * FROM songs', (err, songs) => {
    if (err) {
      console.log(err);
      res.send(500);
    } else {
      res.send(songs);
    }
  })
})

app.post('/api/songs', (req, res) => {
  const sql = `
  INSERT INTO songs (artistName, songName)
    VALUES
      (?, ?)
  `

  db.query(sql, [req.body.artistName, req.body.songName], (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(201);
    }
  })
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
