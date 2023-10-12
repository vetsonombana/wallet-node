const transactions = require("./routes/transactions");
const categories = require("./routes/categories");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use("/api/transactions", transactions);
app.use("/api/categories", categories);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
