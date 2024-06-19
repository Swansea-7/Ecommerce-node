//agrego middleware
const verificarGet = require('./../middleware/verificarGet')
const verificarToken = require('./../middleware/verificarToken')
//creamos el módulo a exportar
//Al ser llamado en index.js recibe las capacidades de express, para ser utilizado
module.exports = function (app) {
    app.get("/ventas", async function(req, res){

        const ventas = require("./../services/ventasServices")

        const response = await ventas.getVentas()
        
        res.status(response.status).send(response.result)
    })

    app.get("/ventas/:id",verificarGet.verificarNumero, async function(req, res){

        let id = req.params.id

        const ventas = require("./../services/ventasServices")

        const response = await ventas.getVentasById(id)
        
        res.status(response.status).send(response.result)
    })

    app.post("/ventas",  verificarToken.admin, async function(req, res){

        let body = req.body

        const ventas = require("./../services/ventasServices")

        const response = await ventas.postVentas(body)
        
        res.status(response.status).send(response.result)
    })
 
}
