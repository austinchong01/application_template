const pool = require("./pool");

// Get all inventory items
async function getElements() {
  const { rows } = await pool.query("SELECT * FROM people");
  return rows;
}

module.exports = {
    getElements,
}