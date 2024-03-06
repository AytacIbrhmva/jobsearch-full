const express = require("express");
const cors = require('cors');
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5001;

connectDb()
const app = express();
app.use(cors());

app.use(express.json());
app.use("/api/jobs", require("./routes/jobRoutes"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
