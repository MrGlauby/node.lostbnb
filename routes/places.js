const express = require("express");
const router = express.Router();

//imports
const {getAllPlaces, getPlaceByID} = require("../controllers/places");


//Gets all Places!
router.route("/places/").get(getAllPlaces);

//Gets ONE place by ID
router.route("/places/:id").get(getPlaceByID);

module.exports = router;


