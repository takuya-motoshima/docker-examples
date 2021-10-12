const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: 'mariadb',
  user: 'root',
  database: 'food'
})

module.exports = pool;