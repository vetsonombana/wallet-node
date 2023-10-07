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

function addTransaction({ montant, description, date }, callback) {
  const database = db.getConnection();
  database.run(
    "INSERT INTO transactions VALUES (null,?,?,?)",
    [montant, description, date],
    function (err) {
      if (err) {
        console.log(err.message);
      }
      console.log(this.lastID);
      callback(this.lastID);
    }
  );
}

module.exports = { getTransactions, addTransaction };
