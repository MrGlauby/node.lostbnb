require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require("cors");

//parsing middlewares:
app.use(express.urlencoded({ extended: true })); //parst req aus HTML Formular
app.use(express.json()); //parst req aus NICHT-HTML Formularen (zB Postman)

//allow CORS
app.use(cors());


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