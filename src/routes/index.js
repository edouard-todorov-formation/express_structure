//importe uniquement le module router de express
const { Router } = require("express");

//crée le routeur
const router = Router();

//exporte le routeur
module.exports = router;

//route de test
// app.post("/test", (req, res)=>{
//     const databody = req.body;
//     res.json({
//         success: true,
//         message: "ok",
//         data: databody
//     });
// })