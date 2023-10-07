const transaction = require("./services/transaction");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  transaction.getTransactions((transaction) => {
    res.send(JSON.stringify(transaction));
  });
});

app.post("/", (req, res) => {
  transaction.addTransaction(req.body, (id) => {
    res.send({ message: "transactions created succesfully", id: id });
  });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
