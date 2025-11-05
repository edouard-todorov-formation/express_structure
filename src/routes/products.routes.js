//importe uniquement le module router de express
const { Router } = require("express");
//importe les controllers "products"
const productsController = require("../controllers/products.controller");
//crée le routeur
const router = Router();


//Definir les endpoints
router.get("/test", productsController.test);
router.get("/", productsController.listProducts);
router.get("/:id", productsController.getProductById);
router.post("/", productsController.createProduct);


module.exports = router;