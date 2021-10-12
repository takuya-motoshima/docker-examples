const express = require('express');
const pool = require('./db');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', async (req, res) => {
  let conn
  try {
    // Connect to DB.
    conn = await pool.getConnection();

    // Find data from the table.
    const sql = `SELECT * FROM desserts`;
    const result = await conn.query(sql);

    // Returns the found data.
    res.send(result)
  } finally {
    if (conn)
      conn.release()
  }
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);