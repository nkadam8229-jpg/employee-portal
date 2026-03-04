const express = require("express");
const morgan = require("morgan");
const path = require("path");
require("dotenv").config();

const { initializeDB } = require("./db");
const employeeRoutes = require("./routes/employeeRoutes");

const app = express();

app.use(express.json());
app.use(morgan("combined"));

app.use(express.static(path.join(__dirname, "public")));

app.use("/api", employeeRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    timestamp: new Date()
  });
});

const PORT = process.env.PORT || 3000;

async function startServer() {
  await initializeDB();

  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
}

startServer();