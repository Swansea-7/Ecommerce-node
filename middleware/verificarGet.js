const verificarGet = {
    verificarNumero : (req, res, next) =>{
        if (Number.isInteger(Number(req.params.id))) {
            next();
        } else {
            res.status(400).send("Hay un error desde carpeta middleware: el ID debe ser un número entero");
        }
    }
}

module.exports = verificarGet;
