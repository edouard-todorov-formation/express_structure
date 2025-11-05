/*
** ici le controller pour mon crud products
*/

//tableau de produits en dur (normalement en bdd)
let productId = 3;
const products = [
    {id: 1, name: "stylo", price:2},
    {id: 2, name: "feutre", price:3}
];


//logique de récuperation des produits
exports.listProducts = (req, res)=>{
    //recuperation des produits en bdd dans la variablble products
    res.status(200).json({
        succes: true,
        message: "liste des produits",
        data: products
    })
};

//logique d'affichage d'un produit


exports.test = (req, res) =>{
    console.log("route test de mon controller product");
    res.send("route test de mon controller product");
}