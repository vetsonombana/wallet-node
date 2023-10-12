const router = require("express").Router();
const {
  getCategories,
  addCategorie,
  modifyCategorie,
  deleteCategorie,
} = require("../controllers/categories");

router.get("/", (req, res) => {
  getCategories((response) => {
    res.send(response);
  });
});
router.post("/", (req, res) => {
  addCategorie(req.body, (id, err) => {
    if (err) {
      res.send({ message: err.message });
    } else {
      res.send({ message: "categories created succesfully", id: id });
    }
  });
});
router.put("/", (req, res) => {
  modifyCategorie(req.body, (err) => {
    if (err) {
      res.send({ message: err.message });
    } else {
      res.send({ message: "categories updated succesfully" });
    }
  });
});
router.delete("/", (req, res) => {
  deleteCategorie(req.query.id, (err) => {
    if (err) {
      res.send({ message: err.message });
    } else {
      res.send({ message: "categories deleted succesfully" });
    }
  });
});
module.exports = router;
