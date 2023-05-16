const express = require("express");
const app = express();
const PORT = 8000;


//import all routes
const placesRouter = require("./routes/places");



app.use("/",placesRouter);

app.get("/",(req, res) => {
    res.send(`
        <h1>LOSTBNB</h1>
    `);
});


app.listen(PORT, () => {
    console.log(`Server Listening on PARTY ${PORT}`);

});