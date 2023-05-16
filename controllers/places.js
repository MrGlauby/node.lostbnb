
const getAllPlaces = (req, res) => {
    res.send(`<h2>Get all Places!</h2>`)
}

const getPlaceByID = (req, res) => {
    console.log(req);
    const placeId = req.params.id
    console.log("PlaceId aus Params", placeId);
    res.send(`<h2>Get one Place By Id: ${placeId}</h2>`)
}

module.exports = {getAllPlaces, getPlaceByID};