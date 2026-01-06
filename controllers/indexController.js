const db = require("../db/queries");

async function getElements(req, res) {
  try {
    const people = await db.getElements();
    res.render('index', { people: people });
  } catch (error) {
    console.error('Error fetching people:', error);
    res.status(500).send('Error fetching data from database');
  }
}

module.exports = {
  getElements
};