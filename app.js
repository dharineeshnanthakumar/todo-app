const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use(require("./routes/tasks.routes"));

app.listen(5000, () => {
  console.log("Listening On Port 5000");
});
