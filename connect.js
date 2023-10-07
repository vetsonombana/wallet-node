const sqlite3 = require("sqlite3").verbose();

// open database in memory
let getConnection = () => {
  return new sqlite3.Database(
    "./db/database.db",
    sqlite3.OPEN_READWRITE,
    (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("Connected to the in-memory SQlite database.");
    }
  );
};

module.exports = { getConnection };
