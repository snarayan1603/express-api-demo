// server.js
import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Root route
app.get("/", (req, res) => {
  res.send("Hello World 🚀 from Express.js!");
});

// Another sample route
app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});