const express = require("express");
const dotenv = require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// Debug logging
// console.log("Environment PORT:", process.env.PORT);
// console.log("Actual port being used:", port);

// Routes
app.use("/api/contacts",require("./routes/contactRoutes"));


// Start server
app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
  console.log(`✅ Test URL: http://localhost:${port}`);
}).on('error', (err) => {
  console.error('❌ Server error:', err);
});