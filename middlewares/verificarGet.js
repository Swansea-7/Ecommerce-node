const verificarGet = {
    verificarNumero : (req, res, next) =>{
        if (Number.isInteger(Number(req.params.id)) ) {
            next();
        }else{
            res.send("hay un error desde carpeta middleware")
            return
        }     
    }
}

module.exports = verificarGet
