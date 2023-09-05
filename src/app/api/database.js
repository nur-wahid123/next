// lib/db.js

const mysql = require('mysql2');

// Create a connection pool to reuse database connections
const pool = mysql.createPool({
  host: 'localhost',     // Your database host
  user: 'indranur_admin',          // Your database username
  password: 'adminbro123',  // Your database password
  database: 'indranur_halo',      // Your database name
  connectionLimit: 10,   // Adjust based on your needs
});

module.exports = pool.promise(); // Export the promise-based pool
