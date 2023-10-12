const router = require("express").Router();
const {
  getTransactions,
  addTransaction,
  modifyTransaction,
  deleteTransaction,
} = require("../controllers/transactions");

router.get("/", (req, res) => {
  getTransactions((response) => {
    res.send(response);
  });
});
router.post("/", (req, res) => {
  addTransaction(req.body, (id, err) => {
    if (err) {
      res.send({ message: err.message });
    } else {
      res.send({ message: "transactions created succesfully", id: id });
    }
  });
});
router.put("/", (req, res) => {
  modifyTransaction(req.body, (err) => {
    if (err) {
      res.send({ message: err.message });
    } else {
      res.send({ message: "transactions updated succesfully" });
    }
  });
});
router.delete("/", (req, res) => {
  deleteTransaction(req.query.id, (err) => {
    if (err) {
      res.send({ message: err.message });
    } else {
      res.send({ message: "transactions deleted succesfully" });
    }
  });
});
module.exports = router;
