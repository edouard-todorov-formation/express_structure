/*
** ici le controller pour mon crud products
*/

//tableau de produits en dur (normalement en bdd)
let productId = 3;
const products = [
    {id: 1, name: "stylo", price:2},
    {id: 2, name: "feutre", price:3}
];


/***
** logique de récuperation et d'affichage des produits
*/
exports.listProducts = (req, res)=>{
    //recuperation des produits en bdd dans la variablble products
    res.status(200).json({
        succes: true,
        message: "liste des produits",
        data: products
    })
};

/***
** logique de récuperation et d'affichage d'un produit
*/
exports.getProductById = (req, res)=>{
    //Number converti le string en nombre
    const id = Number(req.params.id);
    //recherche de produit
    const product = products.find(p => p.id === id);

    //gestion des erreurs si produit non trouvé
    if (!product){
        res.status(404).json({
        succes: false,
        message: "product not found",
        data: null
        })
    }
    //produit trouvé
    res.status(200).json({
        succes: true,
        message: "affichage d'un produit",
        data: product
    })    
};

/***
** logique d'ajout d'un produit
*/
exports.createProduct = (req, res)=>{
    const {name, price} = req.body;

    if(!name || !price || typeof price !== "number"){
        res.status(400).json({
            succes:false,
            message:"name string et price int obligatoire",
            data: null
        });
    };

    //creation d'un produit avec incrementation de l'id automatique
    const newProduct = {id: productId++, name, price};
    //injecte l'objet dans le tableau
    products.push(newProduct);

    console.log(products);
    
    res.status(201).json({
        succes: true,
        message: "produit enregistré",
        data: newProduct
    })
}


exports.test = (req, res) =>{
    console.log("route test de mon controller product");
    res.send("route test de mon controller product");
}