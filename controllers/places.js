const pool = require("../db");

const getAllPlaces = async (req, res) => {
  try {
    const queryResult = await pool.query("SELECT * FROM places;");
    const allPlaces = queryResult.rows;
    res.status(200).json(allPlaces);
    console.log("log all places:", allPlacesResult);
  } catch (err) {
    console.error(err);
    res.status(404).send("Something is not working:", err);
  }
};

const getPlaceByID = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const queryResult = await pool.query("SELECT * FROM places WHERE id=$1", [
      id,
    ]);
    if (queryResult.rowCount !== 0) {
      const [singlePlace] = queryResult.rows;
      console.log(queryResult.rowCount);
      res.status(200).json(singlePlace);
    } else {
      res.status(404).send(`Place with id ${id} not found`);
    }
  } catch (err) {
    console.error(err);
    res.status(404).send(`Something is not working: ${err}`);
  }
};

module.exports = { getAllPlaces, getPlaceByID };
