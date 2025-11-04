//import du packet express
const express = require("express");
//import du packet cors
const cors = require("cors")         //new (cors) installé avec "npm install cors"
//import du package morgan
const morgan = require("morgan")         //new (morgan) installé avec "npm install morgan"
//crée l'application express
const app = express();

//active le middleware Cors
app.use(cors())             //new (cors)
//active le middleware Morgan
app.use(morgan('dev'));         //new (Morgan)
//active le middleware Json
app.use(express.json());        //new (Json)b 

//reoute de test
app.get("/test", (req, res)=>{
    console.log("test de la route en console.log");
    res.send(["test de la response de la route"]);
})

//export app
module.exports = app;

//install middleware cors, morgan, express.json
//