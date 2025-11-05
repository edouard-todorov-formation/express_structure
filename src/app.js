//import du packet express
const express = require("express");
//import du packet cors
const cors = require("cors"); //installé avec "npm install cors"
//import du package morgan
const morgan = require("morgan"); //installé avec "npm install morgan"
//import des routes du projet
const router = require("./routes");


//crée l'application express
const app = express();


//active le middleware Cors //autorise les request cross origin
app.use(cors());
//active le middleware Morgan //log les requet http
app.use(morgan('dev'));
//active le middleware Json //parse le contenu du body de la request (req.body)(json->code)
app.use(express.json());        //new (Json)b 


//chercher toute mes routes (sous la route /monapi)
app.use("/monapi", router);


//export app
module.exports = app;