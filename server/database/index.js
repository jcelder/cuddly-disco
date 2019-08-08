const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'songs'
})

db.connect((err) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log('Connected to MySQL')
  }
})

module.exports = db;