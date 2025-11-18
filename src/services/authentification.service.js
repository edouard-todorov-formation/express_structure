const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const  { User } = require("../models");   

const SALT_ROUNDS= 10;
 /************************************************** 
 ********* S'ENREGISTRER **************************
**************************************************/
async function register({email, password}){
    //utilise bcrypt pour hasher le password
    const hash = await bcrypt.hash(password, SALT_ROUNDS) // SALT_ROUND (variable = 10) ou directement le chiffre de force de cryptage
    //crée l'utiisateur ! stocker le password HASH(pas le password normal!!!!!)
    return User.create({email, password_hash: hash});
}


 /******************************************************************
 ***CONNEXION: validation des données de connexion(credential)*****
******************************************************************/
async function validateCredentials(email, password) {
    //verifier en bdd le user
    const user = await User.findOne({where: {email}});
    //si pas de compte, stoper l'execution de la fonction
    if(!user) return null;
    //compararer les password
    const isValid = await bcrypt.compare(password, user.password_hash);
    //si isValid est?_____ "ok" return user , "sinon" return null
    return isValid ? user : null;
}

//generer le token Structure de jwt.sign(payload, secret, options)
function generateToken(user) {
    jwt.sign(
        //les infos minimal a envoyé au client (payload minimal)
        { sub: user.id, role: user.role },
        //clé secrete defini dans ".env". signe le token
        process.env.JWT_SECRET,
        //option: expire dans 1H
        { expiresIn: "1h" }
    );
}

module.exports = {generateToken, register, validateCredentials};