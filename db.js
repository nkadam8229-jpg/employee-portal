const mysql = require("mysql2/promise");
require("dotenv").config();

let pool;

async function initializeDB() {
  try {
    pool = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });

    const connection = await pool.getConnection();
    console.log("✅ MySQL Database Connected");
    connection.release();
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
    process.exit(1);
  }
}

function getPool() {
  if (!pool) {
    throw new Error("Database pool not initialized");
  }
  return pool;
}

module.exports = { initializeDB, getPool };