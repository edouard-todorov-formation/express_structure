//recuperer les infos du .env pour parametré node (installation de dotenv "npm install dotenv")
//charge les variables d'environnement de .env
require("dotenv").config();

const app = require("./app")

//recupére le PORT
const PORT = process.env.PORT;

//Vérifie que le PORT existe
if(!PORT){
    console.log("PORT absent, veuillez completer le fichier .env");
    //stop le programme de lancement node
    process.exit(1);    
}

//lancement du serveur
app.listen(PORT, ()=>{
    console.log(`Server lancé sur le port ${PORT}`);    
});