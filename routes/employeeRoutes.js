const express = require("express");
const router = express.Router();
const { getPool } = require("../db");

router.post("/employees", async (req, res) => {
  try {
    const { name, email, department } = req.body;

    if (!name || !email || !department) {
      return res.status(400).json({ error: "All fields required" });
    }

    const pool = getPool();

    const [result] = await pool.execute(
      "INSERT INTO employees (name,email,department) VALUES (?,?,?)",
      [name, email, department]
    );

    res.status(201).json({
      message: "Employee added",
      id: result.insertId
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
});

router.get("/employees", async (req, res) => {
  try {
    const pool = getPool();

    const [rows] = await pool.execute("SELECT * FROM employees");

    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
});

router.delete("/employees/:id", async (req, res) => {
  try {
    const pool = getPool();

    const { id } = req.params;

    const [result] = await pool.execute(
      "DELETE FROM employees WHERE id=?",
      [id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Employee not found" });
    }

    res.json({ message: "Employee deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
});

module.exports = router;