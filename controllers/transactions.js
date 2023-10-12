const db = require("../connect.js");
const getTransactions = (callback) => {
  const database = db.getConnection();
  const results = database.all(
    "SELECT * FROM TRANSACTIONS",
    [],
    (err, resp) => {
      if (err) {
        console.log(err.message);
      }
      callback(resp);
    }
  );
  database.close();
  return results;
};

function addTransaction(
  { montant, description, date, id_categorie },
  callback
) {
  const database = db.getConnection();
  database.run(
    "INSERT INTO transactions VALUES (null,?,?,?,?)",
    [montant, description, date, id_categorie],
    function (err) {
      callback(this.lastID, err);
      database.close();
    }
  );
}

function modifyTransaction(
  { montant, description, date, id_categorie, id },
  callback
) {
  const database = db.getConnection();
  database.run(
    "UPDATE transactions SET montant=?, description=?, date=?, id_categorie=? WHERE id=?",
    [montant, description, date, id_categorie, id],
    function (err) {
      callback(err);
      database.close();
    }
  );
}

function deleteTransaction(id, callback) {
  const database = db.getConnection();
  database.run("DELETE FROM transactions WHERE id = ?", [id], function (err) {
    callback(err);
    database.close();
  });
}

module.exports = {
  getTransactions,
  addTransaction,
  modifyTransaction,
  deleteTransaction,
};
