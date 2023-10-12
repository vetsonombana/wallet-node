const db = require("../connect.js");

const getCategories = (callback) => {
  const database = db.getConnection();
  const results = database.all("SELECT * FROM Categorie", [], (err, resp) => {
    if (err) {
      console.log(err.message);
    }
    callback(resp);
  });
  database.close();
  return results;
};

function addCategorie({ label }, callback) {
  const database = db.getConnection();
  database.run(
    "INSERT INTO Categorie VALUES (null,?)",
    [label],
    function (err) {
      callback(this.lastID, err);
      database.close();
    }
  );
}

function modifyCategorie({ label, id }, callback) {
  const database = db.getConnection();
  database.run(
    "UPDATE Categorie SET label=? WHERE id=?",
    [label, id],
    function (err) {
      callback(err);
      database.close();
    }
  );
}

function deleteCategorie(id, callback) {
  const database = db.getConnection();
  database.run("DELETE FROM Categorie WHERE id = ?", [id], function (err) {
    callback(err);
    database.close();
  });
}

module.exports = {
  getCategories,
  addCategorie,
  modifyCategorie,
  deleteCategorie,
};
