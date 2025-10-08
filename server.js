const express = require("express");
const errorHandler = require("./controllers/middleware/errorHandler");
const dotenv = require("dotenv").config();
const connectDb=  require("./config/dbConnection");
connectDb();
const app = express();
const port = process.env.PORT || 5000;

// Debug logging
// console.log("Environment PORT:", process.env.PORT);
// console.log("Actual port being used:", port);
app.use(express.json()) ;// provides a passer ..acts as middle ware
// Routes
app.use("/api/contacts",require("./routes/contactRoutes"));
app.use("/api/users",require("./routes/userRoutes"));
app.use(errorHandler);

// Start server
app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
  console.log(`✅ Test URL: http://localhost:${port}`);
}).on('error', (err) => {
  console.error('❌ Server error:', err);
});