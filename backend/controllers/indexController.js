
async function test(req, res) {
  try {
    res.json({test: "test success"});
  } catch (error) {
    console.error('Error fetching people:', error);
    res.status(500).send('Error fetching test');
  }
}

module.exports = {
  test,
};