//middleware
//si aucune route trouvé on tombe dedans!

module.exports = (req, res)=>{

    res.status(404).json({
        succes: false,
        message: "ressource not found",
        data: null
    })
};